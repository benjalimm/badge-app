import React from 'react';
import style from '../../styles/create/draftBadge.module.css'
import FormTextBoxContainer from './FormTextBoxContainer';
import { BadgeMedia } from '../../schemas/BadgeMedia';

export default function DraftBadgeForm({ 
  currentlySelectedMedia, 
  onTitleChange, 
  onDescriptionTextChange,
  onPresentMediaCatalogue,
  badgeTitle,
  badgeDescription 
}: 
{ currentlySelectedMedia: BadgeMedia,
  onTitleChange: (event: React.FormEvent<HTMLInputElement>) => void,
  onDescriptionTextChange: (event: React.FormEvent<HTMLTextAreaElement>) => void,
  onPresentMediaCatalogue: () => void,
  badgeTitle: string,
  badgeDescription: string
}) {
  return <div className={style.formContainer}>
    <div className={style.mediaContainer}>
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
      value={badgeTitle}
    />
    <FormTextBoxContainer 
      type="TextArea"  
      title='Short description' 
      placeholder='Enter info (Why did they get this Badge?)'
      customTextBoxHeight='180px'
      onChange={onDescriptionTextChange}
      value={badgeDescription}
    />
  </div>
}