import React, { useState } from 'react';
import style from "./RegisterEntityConfirmationView.module.css"
import EstimatedTransaction from '../GenericComponents/EstimatedTransaction';
import TransactionContainer from '../GenericComponents/TransactionContainer';
import { BasicButton } from '../GenericComponents/Buttons';
import { ethers } from 'ethers';
import { weiToEthMultiplier } from '../../utils/ethConversionUtils';

export function RegisterEntityConfirmationView(
  { 
    entityName, 
    stake,
    onRegister 
  } : { 
    entityName: string, 
    stake: number, 
    onRegister: () => void 
  }) {
  return <div className={style.container}>
    <h1 className={style.entityNameHeader}>{entityName}</h1>
    <div className={style.stakeExplanationContainer}>
      <h2 className={style.stakeExplanationHeader}>A stake is required to register</h2>
      <p className={style.stakeExplanationText}>Registering an entity with Badge requires commiting a minimum stake (0.015 eth). Anyone that is awarded with a Badge will have up to 30 days after receiving it to “burn with prejudice”. This involves burning the Badge, claiming half the stake from the issuing entity and penalizing them with a demerit point. This disables the entity from executing any actions on-chain until their new minimum stake is refilled. Every demerit points increases the minimum stake by </p>
    </div>
    <TransactionContainer 
      className={style.transactionContainer}
      isError={true} 
      errorMessage={"You do not have enough ETH stake to register this entity"}
    >
      <EstimatedTransaction
        name="Initial stake"
        usdValue={20}
        cryptoValue={stake * weiToEthMultiplier}
        cryptoSymbol="ETH"
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />
      <EstimatedTransaction
        name="Gas fees"
        usdValue={0.01}
        cryptoValue={0.00001}
        cryptoSymbol="ETH"
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />
      <EstimatedTransaction
        name="Total"
        usdValue={20}
        cryptoValue={0.1501}
        cryptoSymbol="ETH"
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />

    </TransactionContainer>
    <BasicButton 
      text={"Register"}
      style={{marginTop: '20px'}}
      onClick={onRegister}
    />
  </div>
}