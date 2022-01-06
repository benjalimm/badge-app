import React, { useState } from 'react';
import style from '../../styles/create/draftBadge.module.css'
import SampleBadgeCard from '../landingPage/SampleBadgeCard';
import BadgeCard from '../badgeCard/BadgeCard';
import sampleCardData from '../../utils/sampleCardData';
import TextBox from '../GenericComponents/TextBox';
import TextArea from '../GenericComponents/TextArea';
const cardData = sampleCardData[1];

export default function DraftBadgeView() {
  const [badgeTitle, setBadgeTitle] = useState('');
  const [badgeDescription, setBadgeDescription] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');

  function onRecipientTextChange(event: React.FormEvent<HTMLInputElement>) {
    setRecipientAddress(event.currentTarget.value);
  }

  function onTitleChange(event: React.FormEvent<HTMLInputElement>) {
    setBadgeTitle(event.currentTarget.value);
  }

  function onDescriptionTextChange(event: React.FormEvent<HTMLTextAreaElement>) {
    setBadgeDescription(event.currentTarget.value);
  }

  return <div className={style.container}>
    <div className={style.topHalfContainer}>
      <div className={style.badgeCardContainer}>
        <BadgeCard 
          title={badgeTitle}
          content={badgeDescription}
          videoSource={cardData.videoPath}
          profilePhotoSource={cardData.profilePhotoSource}
        />
      </div>

      <div className={style.formContainer}>
        <FormTextBoxContainer 
          type="TextBox"
          title='Recipient' 
          placeholder='Enter wallet address / ENS'
          onChange={onRecipientTextChange}
        />
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
    </div>

  </div>
}

function FormTextBoxContainer({ type, title, placeholder, customTextBoxHeight, onChange }: { 
  type: "TextBox" | "TextArea"
  title: string, 
  placeholder: string,
  customTextBoxHeight?: string 
  onChange:(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) {

  return <div className={style.formTextBoxContainer}>
    <h1 className={style.formTextBoxTitle}>{title}</h1>
    {
      (type ===  "TextBox") ? 
        <TextBox 
          onChange={onChange} 
          placeholder={placeholder} 
          customHeight={customTextBoxHeight}
          fontSize='13px'
        /> :
        <TextArea
          onChange={onChange} 
          placeholder={placeholder} 
          customHeight={customTextBoxHeight}
          fontSize='13px'
        />

    }
    
  </div>
}