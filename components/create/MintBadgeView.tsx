import React, { useState } from 'react';
import style from '../../styles/create/mintBadge.module.css'
import { BadgeData } from '../../schemas/BadgeData';
import BadgeCard from '../badgeCard/BadgeCard';
import FormTextBoxContainer from './FormTextBoxContainer';
import { BasicButton } from '../GenericComponents/Buttons';
export default function MintBadgeView(
  { draftBadgeData, 
    recipientAddress,
    recipientEmail,
    onBackToDraft,
    onWalletAddressValueChange,
    onEmailValueChange 
  }:{ 
    draftBadgeData: BadgeData,
    recipientAddress: string | null,
    recipientEmail: string | null,
    onBackToDraft: () => void,
    onWalletAddressValueChange: (walletAddress: string) => void,
    onEmailValueChange: (emailAddress: string) => void,
  }) {

  const [walletAddress, setWalletAddress] = useState<string | null>(recipientAddress);
  const [email, setEmail] = useState<string | null>(recipientEmail);

  function onWalletAddressChange(event: React.FormEvent<HTMLInputElement>) {
    setWalletAddress(event.currentTarget.value);
    onWalletAddressValueChange(event.currentTarget.value);
  }

  function onEmailAddressChange(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
    onEmailValueChange(event.currentTarget.value);
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
      <EstimatedTransaction
        name="BADGE COST"
        usdValue={10}
        cryptoValue={0.4}
        cryptoSymbol="MATIC"
        customStyle={{ marginTop: '15px' }}
      />
      <EstimatedTransaction
        name="EST. GAS"
        usdValue={0.52}
        cryptoValue={0.002}
        cryptoSymbol="MATIC"
      />
      <EstimatedTransaction
        name="TEMP STAKE"
        usdValue={5}
        cryptoValue={0.2}
        cryptoSymbol="MATIC"
        customStyle={{ color: '#DCC756'}}
      />
      <EstimatedTransaction
        name="TOTAL"
        usdValue={15.52}
        cryptoValue={0.602}
        cryptoSymbol="MATIC"
        customStyle={{ marginTop: '15px'}}
      />
    </div>
  </div>
}

function EstimatedTransaction(
  { name, usdValue, cryptoValue, cryptoSymbol, customStyle } : 
  { name: string, 
    usdValue: number, 
    cryptoValue: number, 
    cryptoSymbol: string,
    customStyle?: React.CSSProperties
  }) {
  return <div className={style.estimatedTransaction} style={customStyle}>
    <h1 className={style.transactionName}>{name}</h1>
    <span className={style.transactionUsdText}>${usdValue}</span>
    <span className={style.transactionCryptoText}>{cryptoValue} {cryptoSymbol}</span>
  </div>
}