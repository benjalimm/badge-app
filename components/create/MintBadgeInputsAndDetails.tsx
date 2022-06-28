import React, { useEffect, useState } from 'react';
import style from './MintBadge.module.css'
import FormTextBoxContainer from './FormTextBoxContainer';
import { getUSDPriceForEth } from '../../utils/getEthPrice';
import EstimatedTransaction from '../GenericComponents/EstimatedTransaction';
import USDConverter from '../../utils/USDConverter';
import TransactionContainer from '../GenericComponents/TransactionContainer';
import { convertAndFormatEthToUSD, formatEthString } from '../../utils/ethConversionUtils';

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

  const [subscriptionId, setSubscriptionId] = useState(0);
  const [ethToUsdMultiplier, setEthToUsd] = useState<number | null>(null);
  // ** LISTEN TO ETH TO USD PRICE UPDATES ** \\
  useEffect(() => {
  
    const subId = USDConverter.subscribeToEthUSDPriceUpdates((ethToUsd) => {
      console.log(`Got new eth to usd multiplier: ${ethToUsd}`);
      setEthToUsd(ethToUsd);
    })

    setSubscriptionId(subId);
    return () => {
      // Clear subscription
      USDConverter.stopSubscribing(subscriptionId);
    }
  }, [])
  
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
      ethPrice={ethToUsdMultiplier}
    />
  </div>
  
}

function TransactionDetails(
  { 
    gasFeesInEth, 
    badgePriceInEth,
    ethPrice 
  } : { 
    gasFeesInEth: number, 
    badgePriceInEth: number,
    ethPrice: number 
  }) {

  return <div className={style.transactionDetails}>
    <h1 className={style.transactionDetailsHeader}>Transaction details</h1>
    <div className={style.detailsContainer}>
      <EstimatedTransaction
        name="BADGE COST"
        usdValue={convertAndFormatEthToUSD(badgePriceInEth, ethPrice)}
        cryptoValue={formatEthString(badgePriceInEth, 5)}
        customStyle={{ marginTop: '15px' }}
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />
      <EstimatedTransaction
        name="EST. GAS"
        usdValue={convertAndFormatEthToUSD(gasFeesInEth, ethPrice)}
        cryptoValue={formatEthString(gasFeesInEth, 5)}
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />
      <EstimatedTransaction
        name="TOTAL"
        usdValue={convertAndFormatEthToUSD(badgePriceInEth + gasFeesInEth, ethPrice)}
        cryptoValue={formatEthString(badgePriceInEth + gasFeesInEth, 5)}
        customStyle={{ marginTop: '15px'}}
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />
    </div>
  </div>
}
