import React, { useState } from 'react';
import Field from '../GenericComponents/Field';
import style from '../../styles/create/receipt.module.css';

export default function MintBadgeReceiptView({
  recipient, email, level, chain, transactionUrl
}:
{
  recipient: string,
  email?: string,
  level: number,
  chain: string,
  transactionUrl: string
}) {
  return <div className={style.container}>
    <img src="images/generic/success.svg" className={style.successImage}/>
    <h1 className={style.successHeader}>Successfully sent Badge</h1>
    <div className={style.detailsContainer}>
      <div className={style.detailsTextContainer}>
        <h1 className={style.detailsHeader}>Badge details</h1>
        <Field 
          className={style.detail}
          title="Recipient" 
          value={recipient}
        />
        <Field 
          className={style.detail}
          title="Email" 
          value={email === undefined ? '(None)' : email}
        />
        <Field 
          className={style.detail}
          title="Grade" 
          value={`Level ${level}`}
        />
        <Field 
          className={style.detail}
          title="Chain" 
          value={chain}
        />
        <Field 
          className={style.detail}
          title="Transaction" 
          value={transactionUrl}
        />
      </div>
    </div>
  </div>
}
