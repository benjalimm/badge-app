import React, { useState } from 'react';
import EstimatedTransaction from '../GenericComponents/EstimatedTransaction';
import style from "./RegisterEntityConfirmationView.module.css"

export function RegisterEntityConfirmationView({ entityName, stake }: { entityName: string, stake: number }) {
  return <div className={style.container}>
    <h1 className={style.entityNameHeader}>{entityName}</h1>
    <div className={style.stakeExplanationContainer}>
      <h2 className={style.stakeExplanationHeader}>A stake is required to register</h2>
      <p className={style.stakeExplanationText}>Registering an entity with Badge requires commiting a minimum stake (0.015 eth). Anyone that is awarded with a Badge will have up to 30 days after receiving it to “burn with prejudice”. This involves burning the Badge, claiming half the stake from the issuing entity and penalizing them with a demerit point. This disables the entity from executing any actions on-chain until their new minimum stake is refilled. Every demerit points increases the minimum stake by </p>
    </div>
    <div className={style.detailsContainer}>
      <EstimatedTransaction
        name="Initial stake"
        usdValue={20}
        cryptoValue={0.015}
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

    </div>
  </div>
}