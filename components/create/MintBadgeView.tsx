import React, { useState } from 'react';
import style from '../../styles/create/mintBadge.module.css'
import { BadgeData } from '../../schemas/BadgeData';
import BadgeCard from '../badgeCard/BadgeCard';
import FormTextBoxContainer from './FormTextBoxContainer';
import { BasicButton } from '../GenericComponents/Buttons';
export default function MintBadgeView(
  { draftBadgeData, 
    onBackToDraft 
  }:{ 
    draftBadgeData: BadgeData,
    onBackToDraft: () => void
  }) {

  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  function onWalletAddressChange(event: React.FormEvent<HTMLInputElement>) {
    setWalletAddress(event.currentTarget.value);
  }

  function onEmailAddressChange(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }

  return <div className={style.mintBadgeViewContainer}>
    <BadgeCard 
      title={draftBadgeData.title} 
      content={draftBadgeData.content} 
      videoSource={draftBadgeData.videoPath}
      profilePhotoSource={draftBadgeData.profilePhotoSource}
      customStyle={{ marginTop: '35px'}}
    />
    <button className={style.backToDraftButton} onClick={onBackToDraft}>Back to draft</button>
    <FormTextBoxContainer 
      type="TextBox" 
      title="Recipient wallet address / ENS"
      placeholder="e.g. ben.eth or 0xF12s..f9"
      onChange={onWalletAddressChange}
      customStyle={{ marginTop: '30px' }}
      value={walletAddress}
    />
    <FormTextBoxContainer 
      type="TextBox" 
      title="Email address (optional)"
      placeholder="e.g. john@gmail.com"
      onChange={onEmailAddressChange}
      customStyle={{ marginTop: '20px' }}
      value={email}
    />
    <TransactionDetails/>
    <BasicButton 
      text="Mint Badge" 
      style={{ marginTop: '30px'}}
      onClick={() => {}}
    />
  </div>
}

function TransactionDetails() {
  return <div className={style.transactionDetails}>
    <h1 className={style.transactionDetailsHeader}>Transaction details</h1>
    <div className={style.detailsContainer}>

    </div>
  </div>
}