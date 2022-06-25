import React, { useEffect, useState } from 'react';
import style from './MintBadge.module.css'
import FormTextBoxContainer from './FormTextBoxContainer';
import { getUSDPriceForEth } from '../../utils/getEthPrice';

export function MintBadgeInputsAndDetails({ 
  walletAddress,
  email,
  onWalletAddressChange,
  onEmailChange,
  gasFeesInEth,
  badgePriceInEth
}:{ 
  walletAddress: string | null,
  email: string | null,
  onWalletAddressChange: (event: React.FormEvent<HTMLInputElement>) => void,
  onEmailChange: (event: React.FormEvent<HTMLInputElement>) => void,  
  gasFeesInEth: number,
  badgePriceInEth: number
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
    <TransactionDetails 
      gasFeesInEth={gasFeesInEth} 
      badgePriceInEth={badgePriceInEth} 
    />

  </div>
  
}

function TransactionDetails(
  { 
    gasFeesInEth, 
    badgePriceInEth 
  } : { 
    gasFeesInEth: number, 
    badgePriceInEth: number 
  }) {
    
  const [gasUsdPrice, setGasUsdPrice] = useState<number | null>(null);
  const [badgeUsdPrice, setBadgePriceUsdPrice] = useState<number | null>(null);

  useEffect(() => {
    getUSDPriceForEth(gasFeesInEth)
      .then(price => {
        console.log(`Price: ${price}`)
        setGasUsdPrice(price);
      }).catch(err => {
        console.log(err);
      })

  }, [gasFeesInEth])

  useEffect(() => {
    getUSDPriceForEth(badgePriceInEth)
      .then(price => {
        setBadgePriceUsdPrice(price);
      }).catch(err => {
        console.log(err);
      })

  }, [badgePriceInEth])
    
  return <div className={style.transactionDetails}>
    <h1 className={style.transactionDetailsHeader}>Transaction details</h1>
    <div className={style.detailsContainer}>
      <EstimatedTransaction
        name="BADGE COST"
        usdValue={badgeUsdPrice}
        cryptoValue={badgePriceInEth}
        cryptoSymbol="ETH"
        customStyle={{ marginTop: '15px' }}
        isCryptoPricePending={false}
        isUSDPricePending={badgeUsdPrice === null}
      />
      <EstimatedTransaction
        name="EST. GAS"
        usdValue={gasUsdPrice}
        cryptoValue={gasFeesInEth}
        cryptoSymbol="ETH"
        isCryptoPricePending={false}
        isUSDPricePending={gasUsdPrice === null}
      />
      <EstimatedTransaction
        name="TOTAL"
        usdValue={badgeUsdPrice + gasUsdPrice}
        cryptoValue={(gasFeesInEth + badgePriceInEth)}
        cryptoSymbol="ETH"
        customStyle={{ marginTop: '15px'}}
        isCryptoPricePending={false}
        isUSDPricePending={(badgeUsdPrice === null) && (gasUsdPrice === null)}
      />
    </div>
  </div>
}

function EstimatedTransaction(
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
