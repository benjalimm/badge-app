import React from 'react';
import style from './EstimatedTransaction.module.css'
export default function EstimatedTransaction(
  { name, 
    usdValue, 
    cryptoValue, 
    customStyle, 
    isUSDPricePending, 
    isCryptoPricePending 
  } : { 
    name: string, 
    usdValue?: string, 
    cryptoValue?: string, 
    customStyle?: React.CSSProperties,
    isUSDPricePending: boolean,
    isCryptoPricePending: boolean
  }) {
  
  return <div className={style.estimatedTransaction} style={customStyle}>
    <h1 className={style.transactionName}>{name}</h1>
    <span className={style.transactionUsdText}>{ 
      isUSDPricePending ? 
        "..." : 
        `${usdValue}`}
    </span>
    <span className={style.transactionCryptoText}> { 
      isCryptoPricePending ? 
        "..." :  
        `${cryptoValue}`}
    </span>
  </div>
}
