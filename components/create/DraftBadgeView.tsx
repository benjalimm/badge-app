import React, { useState } from 'react';
import style from '../../styles/create/draftBadge.module.css'
import BadgeCard from '../badgeCard/BadgeCard';
import sampleCardData from '../../utils/sampleCardData';
import FormTextBoxContainer from './FormTextBoxContainer';
import { badgeMediaList } from '../../utils/badgeMediaList';
import { BadgeMedia } from '../../schemas/BadgeMedia';
import { BasicButton } from '../GenericComponents/Buttons';
import MediaCatalogueView from './MediaCatalogueView';
const cardData = sampleCardData[1];

export default function DraftBadgeView() {

  /** Badge information */
  const [badgeTitle, setBadgeTitle] = useState('');
  const [badgeDescription, setBadgeDescription] = useState('');
  const [indexOfSelectedBadgeMedia, setIndexOfSelectedBadgeMedia] = useState(0);
  const currentlySelectedMedia = badgeMediaList[indexOfSelectedBadgeMedia];

  /** Page configs */
  const [isMediaCatalogueVisible, setIsMediaCatalogueVisible] = useState(false);

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

  /** Placeholders for title and description */
  function getTitle() {
    if (badgeTitle.length > 0) {
      return badgeTitle;
    }
    return "Badge title"
  }

  function getDescription() {
    if (badgeDescription.length > 0) {
      return badgeDescription;
    }
    return "This is a badge description. Write a short explanation of why this Badge is being awarded."
  }

  /**  This method is executed once the user is complete **/
  function prepareBadge() {

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
      </div>
      <div className={style.contentRightContainer}>
        { 
          (!isMediaCatalogueVisible) ? 
            <FormContainer 
              currentlySelectedMedia={currentlySelectedMedia}
              onTitleChange={onTitleChange}
              onDescriptionTextChange={onDescriptionTextChange}
              onPresentMediaCatalogue={presentMediaCatalogue}
            /> :
            <MediaCatalogueView 
              onCancel={onCancelOfMediaCatalogue}
              badgeMediaList={badgeMediaList}
              indexOfCurrentlySelectedMedia={indexOfSelectedBadgeMedia}
              onBadgeMediaSelect={onBadgeMediaSelect}
            />
        }
      </div>
      
    </div>
    <BasicButton text="Prepare" onClick={prepareBadge} style={ {marginBottom: '30px'}}/>
  </div>
}

/* View that contains form inputs */ 
function FormContainer({ 
  currentlySelectedMedia, 
  onTitleChange, 
  onDescriptionTextChange,
  onPresentMediaCatalogue 
}: 
{ currentlySelectedMedia: BadgeMedia,
  onTitleChange: (event: React.FormEvent<HTMLInputElement>) => void,
  onDescriptionTextChange: (event: React.FormEvent<HTMLTextAreaElement>) => void,
  onPresentMediaCatalogue: () => void
}) {
  return <div className={style.formContainer}>
    <div>
      <h1 className={style.mediaSelectionHeader}>Media</h1>
      <div className={style.mediaSelectionBox}>
        <span className={style.mediaSelectionText}>
          {`${currentlySelectedMedia.mediaType} - ${currentlySelectedMedia.id} - ${currentlySelectedMedia.name}`}</span>
        <button 
          className={style.mediaSelectButton} 
          onClick={onPresentMediaCatalogue}>
            Select media
        </button>
      </div>
          
    </div>
    <FormTextBoxContainer 
      type="TextBox"
      title='Badge name' 
      placeholder='Enter Badge name (e.g. Hackathon winner)'
      onChange={onTitleChange}
    />
    <FormTextBoxContainer 
      type="TextArea"  
      title='Description' 
      placeholder='Enter info (Why did they get this Badge?)'
      customTextBoxHeight='180px'
      onChange={onDescriptionTextChange}
    />
  </div>
}