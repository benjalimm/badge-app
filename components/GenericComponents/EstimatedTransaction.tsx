import React from 'react';
import style from './EstimatedTransaction.module.css'
export default function EstimatedTransaction(
  { name, 
    usdValue, 
    cryptoValue, 
    cryptoSymbol, 
    customStyle, 
    isUSDPricePending, 
    isCryptoPricePending 
  } : { 
    name: string, 
    usdValue?: number, 
    cryptoValue?: number, 
    cryptoSymbol: string,
    customStyle?: React.CSSProperties,
    isUSDPricePending: boolean,
    isCryptoPricePending: boolean
  }) {

  const usdValueString = usdValue != null ? `$${usdValue.toFixed(2)}` : '--';
  const cryptoValueString = cryptoValue  != null ? `${cryptoValue.toFixed(5)}` : '--';
  
  return <div className={style.estimatedTransaction} style={customStyle}>
    <h1 className={style.transactionName}>{name}</h1>
    <span className={style.transactionUsdText}>{ 
      isUSDPricePending ? 
        "..." : 
        `$${usdValueString}`}
    </span>
    <span className={style.transactionCryptoText}> { 
      isCryptoPricePending ? 
        "..." :  
        `${cryptoValueString} ${cryptoSymbol}`}
    </span>
  </div>
}
