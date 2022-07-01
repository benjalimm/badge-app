import React, { useEffect, useState } from 'react';
import style from './DraftBadge.module.css'
import BadgeCard, { WalletIdentifierType } from '../badgeCard/BadgeCard';
import { badgeMediaList } from '../../utils/badgeMediaList';
import { BasicButton } from '../GenericComponents/Buttons';
import MediaCatalogueView from './MediaCatalogueView';
import { BadgeData } from '../../schemas/BadgeData';
import { MintBadgeInputsAndDetails } from './MintBadgeInputsAndDetails';
import { PageState } from '../../schemas/create';
import DraftBadgeForm from './DraftBadgeForm';
import { getCurrentEntity } from "../../utils/entityLocalState";
import cx from 'classnames';
import { isReallyEmpty } from '../../utils/stringUtils';
import { getAddressForEns, isEns, isValidEthAddress } from '../../utils/addressUtils';
import { useProvider } from 'wagmi';

export type AddressHighlightType = "MISSING_ADDRESS" | "INVALID_ADDRESS" | "INVALID_ENS" | "ENS_ADDRESS_FOUND";

export default function DraftAndMintBadgeView({ 
  onSubmitDraftBadgeData, 
  onBackToDraft,
  onMintAndSendBadge,
  pageState,
  gasFeesInEth,
  baseBadgePriceInEth,
  finalBadgePriceInEth,
  userBalanceInEth,
  isButtonLoading
} : { 
  onSubmitDraftBadgeData: (badgeData: BadgeData) => void,
  onMintAndSendBadge: 
  (badgeData: BadgeData, recipientAddress: string, email: string) => void,
  onBackToDraft: () => void,
  pageState: PageState,
  gasFeesInEth: number
  baseBadgePriceInEth: number,
  finalBadgePriceInEth: number,
  userBalanceInEth: number,
  isButtonLoading: boolean
}) {

  // ** WAGMI HOOKS ** \\
  const provider = useProvider();

  // ** DRAFT BADGE INFORMATION ** \\
  const [badgeTitle, setBadgeTitle] = useState('');
  const [badgeDescription, setBadgeDescription] = useState('');
  const [indexOfSelectedBadgeMedia, setIndexOfSelectedBadgeMedia] = useState(0);
  const [isMediaCatalogueVisible, setIsMediaCatalogueVisible] = useState(false);
  const [badgeLevel, setBadgeLevel] = useState<number>(1);
  const currentlySelectedMedia = badgeMediaList[indexOfSelectedBadgeMedia];
  const [displayTitleWarning, setDisplayTitleWarning] = useState(false);

  // ** MINT BADGE INFORMATION ** \\
  const [walletIdentifierType, setWalletIdentifierType] = useState<WalletIdentifierType>("NONE");
  const [walletIdentifier, setWalletIdentifier] = useState<string | null>(null) // -> ENS address or wallet addresss
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const currentEntity = getCurrentEntity()
  const [addressHighlightType, setAddressHighlightType] = useState<AddressHighlightType | null>(null);
  const entityName = currentEntity?.name ?? ""

  // ** USE EFFECTS ** \\

  useEffect(() => {
    // Reset wallet address + identifier type
    setWalletAddress(null)
    setWalletIdentifierType("NONE")
    
    // See if identifier is either a wallet address or ENS
    if (isValidEthAddress(walletIdentifier)) {
      setWalletAddress(walletIdentifier);
      setWalletIdentifierType("ADDRESS")
    } else if (isEns(walletIdentifier)) {
      getAddressForEns(walletIdentifier, provider).then(address => {
        console.log(address)
        
        if (address) {
          setWalletAddress(address);
          setAddressHighlightType("ENS_ADDRESS_FOUND")
          setWalletIdentifierType("ENS")
        } else {
          setAddressHighlightType("INVALID_ENS")
        }
        
      }).catch(err => {
        console.error(err);
      })
    }

  }, [walletIdentifier])

  useEffect(() => {

    // If there is a title warning, remove if user adds a title
    if (!isReallyEmpty(badgeTitle) && displayTitleWarning) {
      setDisplayTitleWarning(false);
    }
  }, [badgeTitle])

  useEffect(() => {
    // If there is a wallet address warning, remove if user starts typing
    if (!isReallyEmpty(walletIdentifier) && addressHighlightType) {
      setAddressHighlightType(null);
    }
  }, [walletIdentifier])

  // ** DRAFT BADGE METHODS ** \\
  function onTitleChange(event: React.FormEvent<HTMLInputElement>) {
    setBadgeTitle(event.currentTarget.value);
  }

  function onDescriptionTextChange(event: React.FormEvent<HTMLTextAreaElement>) {
    setBadgeDescription(event.currentTarget.value);
  }

  function onBadgeMediaSelect(index: number) {
    setIndexOfSelectedBadgeMedia(index);
  }

  function onCancelOfMediaCatalogue() {
    setIsMediaCatalogueVisible(false);
  }

  function presentMediaCatalogue() {
    setIsMediaCatalogueVisible(true);
  }

  //** MINT BADGE METHODS **\\
  function onWalletIdentifierChange(event: React.FormEvent<HTMLInputElement>) {
    setWalletIdentifier(event.currentTarget.value);
  }

  function onEmailChange(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
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
      videoPath: currentlySelectedMedia.url,
      level: badgeLevel,
      entityName: entityName,
    });
  }

  function mintBadge() {
    // If badge title is empty, we display a warning
    if (isReallyEmpty(walletIdentifier)) {
      setAddressHighlightType("MISSING_ADDRESS")
      return
    } else if (!isValidEthAddress(walletIdentifier) && !isEns(walletIdentifier)) {
      // If not empty, check if identifier is invalid
      setAddressHighlightType("INVALID_ADDRESS")
      return
    }

    const ens: string | undefined 
    = walletIdentifierType == "ENS" ? walletIdentifier : undefined

    onMintAndSendBadge({ 
      title: badgeTitle, 
      content: badgeDescription, 
      videoPath: currentlySelectedMedia.url, 
      level: badgeLevel,
      entityName: entityName,
      recipientEns: ens
    }, walletAddress, email)
  }

  return <div className={style.container}>
    <div className={style.contentContainer}>
      <div className={style.badgeCardContainer}>
        <BadgeCard 
          title={getTitle()}
          content={getDescription()}
          videoSource={currentlySelectedMedia.url}
          level={badgeLevel}
          entityName={entityName}
          walletIdentifier={walletIdentifier}
          identifierType={walletIdentifierType}
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
              walletIdentifier={walletIdentifier}
              email={email}  
              onWalletIdentifierChange={onWalletIdentifierChange}
              onEmailChange={onEmailChange}
              badgePriceInEth={finalBadgePriceInEth}
              gasFeesInEth={gasFeesInEth}
              userBalanceInEth={userBalanceInEth}
              walletAddressHighlightType={addressHighlightType}
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
                indexOfCurrentlySelectedMedia={indexOfSelectedBadgeMedia}
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
        /> :
        (
          <BasicButton 
            isLoading={isButtonLoading}
            text="Mint + Send" 
            onClick={mintBadge}
          />)
    }
    
  </div>
}

