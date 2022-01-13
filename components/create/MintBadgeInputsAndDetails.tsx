import React, { useState } from 'react';
import style from '../../styles/create/mintBadge.module.css'
import FormTextBoxContainer from './FormTextBoxContainer';

export function MintBadgeInputsAndDetails({ 
  walletAddress,
  email,
  onWalletAddressChange,
  onEmailChange
}:{ 
  walletAddress: string | null,
  email: string | null,
  onWalletAddressChange: (event: React.FormEvent<HTMLInputElement>) => void,
  onEmailChange: (event: React.FormEvent<HTMLInputElement>) => void,
}) {
  return <div className={style.inputsAndDetails}>
    <FormTextBoxContainer 
      type="TextBox" 
      title="Recipient wallet address / ENS"
      placeholder="e.g. ben.eth or 0xF12s..f9"
      onChange={onWalletAddressChange}
      value={walletAddress}
    />
    <FormTextBoxContainer 
      type="TextBox" 
      title="Email address (optional)"
      placeholder="e.g. john@gmail.com"
      onChange={onEmailChange}
      value={email}
    />
    <TransactionDetails/>

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
