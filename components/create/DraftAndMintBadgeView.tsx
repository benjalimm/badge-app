import React, { useEffect, useState } from 'react';
import style from '../../styles/create/draftBadge.module.css'
import BadgeCard from '../badgeCard/BadgeCard';
import sampleCardData from '../../utils/sampleCardData';
import { badgeMediaList } from '../../utils/badgeMediaList';
import { BasicButton } from '../GenericComponents/Buttons';
import MediaCatalogueView from './MediaCatalogueView';
import { BadgeData } from '../../schemas/BadgeData';
import { MintBadgeInputsAndDetails } from './MintBadgeInputsAndDetails';
import { PageState } from '../../schemas/create';
import DraftBadgeForm from './DraftBadgeForm';
import cx from 'classnames';

const cardData = sampleCardData[1];

export default function DraftAndMintBadgeView({ 
  onSubmitDraftBadgeData, 
  onBackToDraft,
  onMintAndSendBadge,
  pageState 
} : { 
  onSubmitDraftBadgeData: (badgeData: BadgeData) => void,
  onMintAndSendBadge: (badgeData: BadgeData) => void,
  onBackToDraft: () => void,
  pageState: PageState
}) {

  /** DRAFT BADGE INFORMATION */
  const [badgeTitle, setBadgeTitle] = useState('');
  const [badgeDescription, setBadgeDescription] = useState('');
  const [indexOfSelectedBadgeMedia, setIndexOfSelectedBadgeMedia] = useState(0);
  const [isMediaCatalogueVisible, setIsMediaCatalogueVisible] = useState(false);
  const currentlySelectedMedia = badgeMediaList[indexOfSelectedBadgeMedia];

  /** MINT BADGE INFORMATION */
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  /** DRAFT BADGE METHODS */
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

  /** MINT BADGE METHODS */
  function onWalletAddressChange(event: React.FormEvent<HTMLInputElement>) {
    setWalletAddress(event.currentTarget.value);
  }

  function onEmailChange(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }

  /** Placeholders for title and description */
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

  /**  This method is executed once the user is complete **/
  function prepareBadge() {
    // NOTE: Run checks on the data here before submitting

    onSubmitDraftBadgeData({
      id: 0,
      title: badgeTitle,
      content: badgeDescription,
      videoPath: currentlySelectedMedia.url,
      profilePhotoSource: cardData.profilePhotoSource
    });
  }

  return <div className={style.container}>
    <div className={style.contentContainer}>
      <div className={style.badgeCardContainer}>
        <BadgeCard 
          title={getTitle()}
          content={getDescription()}
          videoSource={currentlySelectedMedia.url}
          profilePhotoSource={cardData.profilePhotoSource}
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
              walletAddress={walletAddress}
              email={email}  
              onWalletAddressChange={onWalletAddressChange}
              onEmailChange={onEmailChange}
            /> :
            ((!isMediaCatalogueVisible) ? 
              <DraftBadgeForm 
                currentlySelectedMedia={currentlySelectedMedia}
                onTitleChange={onTitleChange}
                onDescriptionTextChange={onDescriptionTextChange}
                onPresentMediaCatalogue={presentMediaCatalogue}
                badgeTitle={badgeTitle}
                badgeDescription={badgeDescription}
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
          style={{paddingTop:'30px'}}
        /> :
        (
          <BasicButton 
            text="Mint + Send" 
            onClick={() => 
              onMintAndSendBadge({ 
                title: badgeTitle, 
                content: badgeDescription, 
                videoPath: currentlySelectedMedia.url, 
                profilePhotoSource: cardData.profilePhotoSource 
              })}
            style={{paddingTop:'30px'}}
          />)
    }
    
  </div>
}

