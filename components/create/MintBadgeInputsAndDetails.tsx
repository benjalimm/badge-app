import React, { useEffect, useState } from 'react';
import style from './MintBadge.module.css'
import FormTextBoxContainer, { HighlightType } from './FormTextBoxContainer';
import { getUSDPriceForEth } from '../../utils/getEthPrice';
import EstimatedTransaction from '../GenericComponents/EstimatedTransaction';
import USDConverter from '../../utils/USDConverter';
import TransactionContainer from '../GenericComponents/TransactionContainer';
import { convertAndFormatEthToUSD, formatEthString } from '../../utils/ethConversionUtils';
import { AddressHighlightType } from './DraftAndMintBadgeView';
import { shortenAddress } from '../../utils/addressUtils';

export function MintBadgeInputsAndDetails({ 
  walletIdentifier,
  email,
  onWalletIdentifierChange,
  onEmailChange,
  gasFeesInEth,
  badgePriceInEth,
  walletAddressHighlightType,
  ensWalletAddress
}:{ 
  walletIdentifier: string | null,
  email: string | null,
  onWalletIdentifierChange: (event: React.FormEvent<HTMLInputElement>) => void,
  onEmailChange: (event: React.FormEvent<HTMLInputElement>) => void,  
  gasFeesInEth: number,
  badgePriceInEth: number,
  walletAddressHighlightType?: AddressHighlightType
  ensWalletAddress?: string
}) {

  const [subscriptionId, setSubscriptionId] = useState(0);
  const [ethToUsdMultiplier, setEthToUsd] = useState<number | null>(null);

  // Figure out if there is highlight. If so, is it an error or success
  let highlightType: HighlightType | undefined;
  if (walletAddressHighlightType) {
    highlightType = walletAddressHighlightType == "ENS_ADDRESS_FOUND" ? "SUCCESS" : "ERROR";
  }
  let message: string;

  switch (walletAddressHighlightType) {
    case "INVALID_ADDRESS":
      message = "Invalid wallet address";
      break;
    case "INVALID_ENS":
      message = "Invalid ENS address";
      break;
    case "MISSING_ADDRESS":
      message = "Missing wallet address";
      break;
    case "ENS_ADDRESS_FOUND":
      message = `${ensWalletAddress}`;
      break
    default:
      message = "";
  }
  
  useEffect(() => {
    // Listen to eth price updates
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
      onChange={onWalletIdentifierChange}
      value={walletIdentifier}
      highlight={highlightType}
      message={message}
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
    <TransactionContainer 
      className={style.detailsContainer} 
      boxCustomStyle={{ height: "100%"}}
    >
      <EstimatedTransaction
        name="BADGE COST"
        usdValue={convertAndFormatEthToUSD(badgePriceInEth, ethPrice)}
        cryptoValue={formatEthString(badgePriceInEth, 5)}
        customStyle={{ marginTop: '5px' }}
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />
      <EstimatedTransaction
        name="EST. GAS"
        usdValue={convertAndFormatEthToUSD(gasFeesInEth, ethPrice)}
        cryptoValue={formatEthString(gasFeesInEth, 5)}
        customStyle={{ marginTop: '5px' }}
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />
      <EstimatedTransaction
        name="TOTAL"
        usdValue={convertAndFormatEthToUSD(badgePriceInEth + gasFeesInEth, ethPrice)}
        cryptoValue={formatEthString(badgePriceInEth + gasFeesInEth, 5)}
        customStyle={{ marginTop: '20px'}}
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />

    </TransactionContainer>
  </div>
}
