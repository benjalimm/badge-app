import React, { useState } from 'react';
import Field from '../../GenericComponents/Field';
import style from './MintBadgeReceiptView.module.css';
import { BasicButton } from '../../GenericComponents/Buttons';
import { BadgeChain } from '../../../schemas/ChainTypes';
import { getScanUrl  } from '../../../utils/metadata/chainUtils';
import { getMarketPlaceAssetLink } from '../../../utils/metadata/marketplaceLinksUtils';

export default function MintBadgeReceiptView({
  badgeId,
  recipient, 
  ens, 
  email, 
  xp, 
  level, 
  chain, 
  transactionHash, 
  marketPlaceLink,
  onContinue
}:
{
  badgeId: number,
  recipient: string,
  ens?: string,
  email?: string,
  level: number,
  xp: number
  chain: BadgeChain,
  transactionHash: string,
  marketPlaceLink: string,
  onContinue: () => void
}) {

  function getAddressString() {
    if (ens) {
      return recipient + `\n(${ens})` 
    }
    return recipient
  }

  function openMarketPlaceLink() {
    window.open(marketPlaceLink, '_blank', 'noopener,noreferrer');
  }

  return <div className={style.container}>
    <div className={style.contentContainer}>
      <img src="images/generic/success.svg" className={style.successImage}/>
      <h1 className={style.successHeader}>Successfully sent Badge</h1>
      <div className={style.detailsContainer}>
        <div className={style.detailsTextContainer}>
          <h1 className={style.detailsHeader}>Badge details</h1>
          <Field 
            className={style.detail}
            title="Badge ID" 
            value={`${badgeId}`}
          />
          <Field 
            className={style.detail}
            title="Recipient" 
            value={getAddressString()}
          />
          <Field 
            className={style.detail}
            title="Grade" 
            value={`Level ${level} - ${xp} BXP`}
          />
          <Field 
            className={style.detail}
            title="Chain" 
            value={chain}
          />
          <Field 
            className={style.detail}
            title="Transaction" 
            value={getScanUrl(chain, transactionHash, "Transaction")}
            isLink={true}
          />
        </div>
      </div>
      
      <BasicButton 
        className={style.viewAssetButton}
        text="View Badge"
        onClick={openMarketPlaceLink}
      />
      <button className={style.continueButton} onClick={onContinue}>
        Continue
      </button>

    </div>
    
  </div>
}
