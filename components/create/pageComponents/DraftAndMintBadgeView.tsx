import React, { useEffect, useState } from 'react';
import style from './DraftBadge.module.scss'
import BadgeCard, { WalletIdentifierType } from '../../badgeCard/BadgeCard';
import { badgeMediaList } from '../../../utils/metadata/badgeMediaList';
import { BasicButton } from '../../GenericComponents/Buttons';
import MediaCatalogueView from './MediaCatalogueView';
import { BadgeData } from '../../../schemas/BadgeData';
import { MintBadgeInputsAndDetails } from './MintBadgeInputsAndDetails';
import { PageState } from '../../../schemas/create';
import DraftBadgeForm from './DraftBadgeForm';
import useCurrentEntity from '../../../utils/hooks/useCurrentEntity';
import cx from 'classnames';
import { isReallyEmpty } from '../../../utils/generic/stringUtils';
import { getAddressForEns, isEns, isValidEthAddress } from '../../../utils/generic/addressUtils';
import { useProvider } from 'wagmi';

export type AddressInputHighlightType = "MISSING_ADDRESS" | "INVALID_ADDRESS" | "INVALID_ENS" | "ENS_ADDRESS_FOUND";

export default function DraftAndMintBadgeView({ 
  onSubmitDraftBadgeData, 
  onBackToDraft,
  onMintAndSendBadge,
  setIndexOfBadgeMedia,
  pageState,
  gasFeesInEth,
  baseBadgePriceInEth,
  finalBadgePriceInEth,
  userBalanceInEth,
  isButtonLoading,
  indexOfBadgeMedia
  
} : { 
  onSubmitDraftBadgeData: (badgeData: BadgeData) => void,
  onMintAndSendBadge: 
  (badgeData: BadgeData, recipientAddress: string, email: string) => void,
  onBackToDraft: () => void,
  setIndexOfBadgeMedia: (index: number) => void,
  pageState: PageState,
  gasFeesInEth: number
  baseBadgePriceInEth: number,
  finalBadgePriceInEth: number,
  userBalanceInEth: number,
  isButtonLoading: boolean,
  indexOfBadgeMedia: number,
}) {

  // ** WAGMI HOOKS ** \\
  const ensProvider = useProvider({ chainId: 1});

  // ** DRAFT BADGE INFORMATION ** \\
  const [badgeTitle, setBadgeTitle] = useState('');
  const [badgeDescription, setBadgeDescription] = useState('');
  const [isMediaCatalogueVisible, setIsMediaCatalogueVisible] = useState(false);
  const [badgeLevel, setBadgeLevel] = useState<number>(1);
  const currentlySelectedMedia = badgeMediaList[indexOfBadgeMedia];
  const [displayTitleWarning, setDisplayTitleWarning] = useState(false);

  // ** MINT BADGE INFORMATION ** \\
  const [walletIdentifierInput, setWalletIdentifierInput] = useState<string | null>(null) // Could be ENS address or wallet addresss
  const [walletIdentifierInputType, setWalletIdentifierInputType] = useState<WalletIdentifierType>("NONE"); // Distingiush between ENS and wallet address
  const [walletAddress, setWalletAddress] = useState<string | null>(null); // Source of truth for wallet address

  const [emailInput, setEmailInput] = useState<string | undefined>(undefined);
  const [addressInputHighlightType, setAddressInputHighlightType] = useState<AddressInputHighlightType | null>(null); // Highlight success or failure for address input

  const currentEntity = useCurrentEntity()
  const entityName = currentEntity?.name ?? ""

  // ** USE EFFECTS ** \\

  useEffect(() => {
    // In this block, we observe the walletIdentifier input and determine if it is a valid ENS address or a valid wallet address. If ENS, we check if the ens is valid and display the corresponding success or error message.

    // Reset wallet address + identifier type
    setWalletAddress(null)
    setWalletIdentifierInputType("NONE")
    
    if (isValidEthAddress(walletIdentifierInput)) {
      // 1. See if identifier is either a wallet address
      setWalletAddress(walletIdentifierInput);
      setWalletIdentifierInputType("ADDRESS")
    } else if (isEns(walletIdentifierInput)) {
      // 2. See if identifier is an ENS address

      // 2.1. If so, get the wallet address for the ENS address
      getAddressForEns(walletIdentifierInput, ensProvider).then(address => {
        console.log(address)
        
        if (address) {
          // 3. If it returns an address, we set the wallet addres
          setWalletAddress(address);

          // 4. Highlight to the user that we've found the ENS address
          setAddressInputHighlightType("ENS_ADDRESS_FOUND")

          // 5. Distinguish the identifier input type as ENS
          setWalletIdentifierInputType("ENS")
        } else {
          // 6. If it returns null, we highlight the input as an invalid ENS
          setAddressInputHighlightType("INVALID_ENS")
        }
        
      }).catch(err => {
        console.error(err);
      })
    }

  }, [walletIdentifierInput])

  useEffect(() => {

    // If there is a title warning, remove if user adds a title
    if (!isReallyEmpty(badgeTitle) && displayTitleWarning) {
      setDisplayTitleWarning(false);
    }
  }, [badgeTitle])

  useEffect(() => {
    // If there is a wallet address warning, remove if user starts typing
    if (!isReallyEmpty(walletIdentifierInput) && addressInputHighlightType) {
      setAddressInputHighlightType(null);
    }
  }, [walletIdentifierInput])

  useEffect(() => {
    function keyDownHandler(event: KeyboardEvent) {
      if (event.key === "Enter") {
        event.preventDefault();

        switch (pageState) {
          case "DraftBadge":
            prepareBadge()
            break
          case "MintBadge":
            mintBadge()
            break
          default:
            break
        } 
      } else if (event.key === "[" && event.metaKey) {
        event.preventDefault();
        onBackToDraft();
      }
    }

    document.addEventListener('keydown', keyDownHandler, true);

    return () => {
      document.removeEventListener('keydown', keyDownHandler, true);
    }
  }, [badgeTitle, badgeDescription, badgeLevel, currentlySelectedMedia, walletIdentifierInput, walletAddress, emailInput])

  // ** DRAFT BADGE METHODS ** \\
  function onTitleChange(event: React.FormEvent<HTMLInputElement>) {
    setBadgeTitle(event.currentTarget.value);
  }

  function onDescriptionTextChange(event: React.FormEvent<HTMLTextAreaElement>) {
    setBadgeDescription(event.currentTarget.value);
  }

  function onBadgeMediaSelect(index: number) {
    setIndexOfBadgeMedia(index);
  }

  function onCancelOfMediaCatalogue() {
    setIsMediaCatalogueVisible(false);
  }

  function presentMediaCatalogue() {
    setIsMediaCatalogueVisible(true);
  }

  //** MINT BADGE METHODS **\\
  function onWalletIdentifierChange(event: React.FormEvent<HTMLInputElement>) {
    setWalletIdentifierInput(event.currentTarget.value);
  }

  function onEmailChange(event: React.FormEvent<HTMLInputElement>) {
    setEmailInput(event.currentTarget.value);
  }

  //** PLACEHOLDERS **\\
  function getTitle() {
    if ((badgeTitle.length > 0) || (pageState === "MintBadge")) {
      return badgeTitle;
    }
    return "Badge title"
  }

  function getDescription() {
    if ((badgeDescription.length > 0)|| (pageState === "MintBadge")) {
      return badgeDescription;
    }
    return "This is a badge description. Write a short explanation of why this Badge is being awarded."
  }

  //** This method is executed once the user is complete **\\
  function prepareBadge() {

    // If badge title is empty, we display a warning
    if (isReallyEmpty(badgeTitle)) {
      setDisplayTitleWarning(true)
      return
    }
    
    // NOTE: Run checks on the data here before submitting
    onSubmitDraftBadgeData({
      id: 0,
      title: badgeTitle,
      content: badgeDescription,
      videoPath: currentlySelectedMedia.storageUrl,
      level: badgeLevel,
      entityName: entityName,
    });
  }

  function mintBadge() {
    // If badge title is empty, we display a warning
    if (isReallyEmpty(walletIdentifierInput)) {
      setAddressInputHighlightType("MISSING_ADDRESS")
      return
    } else if (!isValidEthAddress(walletIdentifierInput) && !isEns(walletIdentifierInput)) {
      // If not empty, check if identifier is invalid
      setAddressInputHighlightType("INVALID_ADDRESS")
      return
    }

    const ens: string | undefined 
    = walletIdentifierInputType == "ENS" ? walletIdentifierInput : undefined

    onMintAndSendBadge({ 
      title: badgeTitle, 
      content: badgeDescription, 
      videoPath: currentlySelectedMedia.storageUrl, 
      level: badgeLevel,
      entityName: entityName,
      recipientEns: ens
    }, walletAddress, emailInput)
  }

  return <div className={style.container}>
    <div className={style.contentContainer}>
      <div className={style.badgeCardContainer}>
        <BadgeCard 
          title={getTitle()}
          content={getDescription()}
          videoSource={currentlySelectedMedia.quickAccessPath}
          level={badgeLevel}
          entityName={entityName}
          walletIdentifier={walletIdentifierInput}
          identifierType={walletIdentifierInputType}
        />
        <button 
          className={cx(style.backButton, 
            (pageState === "DraftBadge" ? 
              style.backButtonFadeOut : 
              style.backButtonFadeIn
            ))} 
          onClick={onBackToDraft}>
          Back to draft
        </button>
      </div>
      <div className={style.contentRightContainer}>
        { 
          pageState === "MintBadge" ? 
            <MintBadgeInputsAndDetails 
              walletIdentifier={walletIdentifierInput}
              email={emailInput}  
              onWalletIdentifierChange={onWalletIdentifierChange}
              onEmailChange={onEmailChange}
              badgePriceInEth={finalBadgePriceInEth}
              gasFeesInEth={gasFeesInEth}
              userBalanceInEth={userBalanceInEth}
              walletAddressHighlightType={addressInputHighlightType}
              ensWalletAddress={walletAddress}
            /> :
            ((!isMediaCatalogueVisible) ? 
              <DraftBadgeForm 
                currentlySelectedMedia={currentlySelectedMedia}
                onTitleChange={onTitleChange}
                onDescriptionTextChange={onDescriptionTextChange}
                onPresentMediaCatalogue={presentMediaCatalogue}
                badgeTitle={badgeTitle}
                badgeDescription={badgeDescription}
                badgeLevel={badgeLevel}
                setBadgeLevel={setBadgeLevel}
                baseBadgePriceInEth={baseBadgePriceInEth}
                displayWarning={displayTitleWarning}
              /> :
              <MediaCatalogueView 
                onCancel={onCancelOfMediaCatalogue}
                badgeMediaList={badgeMediaList}
                indexOfCurrentlySelectedMedia={indexOfBadgeMedia}
                onBadgeMediaSelect={onBadgeMediaSelect}
              />)
        }
      </div>
      
    </div>
    {
      pageState === "DraftBadge" ? 
        <BasicButton 
          text="Prepare" 
          onClick={prepareBadge} 
          className={style.prepareButton}
        /> :
        (
          <BasicButton 
            isLoading={isButtonLoading}
            text="Mint + Send" 
            onClick={mintBadge}
            className={style.prepareButton}

          />)
    }
    
  </div>
}

