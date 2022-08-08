import React, { useEffect, useState } from 'react';
import style from "./RegisterEntityConfirmationView.module.css"
import EstimatedTransaction from '../../GenericComponents/EstimatedTransaction';
import TransactionContainer from '../../GenericComponents/TransactionContainer';
import { BasicButton } from '../../GenericComponents/Buttons';
import { convertAndFormatWeiToUSD, formatWeiToEthString, weiToEthMultiplier } from '../../../utils/ethConversionUtils';
import { BigNumber } from 'ethers';
import USDConverter from '../../../utils/USDConverter';

export function RegisterEntityConfirmationView(
  { 
    entityName, 
    stake,
    onRegister,
    gasFees,
    enoughETH,
    onBack,
    isButtonLoading
  } : { 
    entityName: string, 
    stake?: BigNumber, 
    gasFees?: BigNumber,
    onRegister: () => void,
    enoughETH: boolean,
    onBack: () => void,
    isButtonLoading: boolean
  }) {

  const [subscriptionId, setSubscriptionId] = useState("");
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

  useEffect(() => {
    function keyDownHandler(event: KeyboardEvent) {
      if (event.key === "Enter") {
        event.preventDefault();
        onRegister();
      } else if (event.key === "[" && event.metaKey) {
        event.preventDefault();
        onBack();
      }
    }

    document.addEventListener('keydown', keyDownHandler, true);

    return () => {
      document.removeEventListener('keydown', keyDownHandler, true);
    }
  }, [entityName])

  return <div className={style.container}>
    <h1 className={style.entityNameHeader}>{entityName}</h1>
    <div className={style.stakeExplanationContainer}>
      <h2 className={style.stakeExplanationHeader}>A stake is required to register</h2>
      <p className={style.stakeExplanationText}>
        Registering an entity with Badge requires commiting a minimum stake (0.015 eth). Anyone that is awarded with a Badge will have up to 30 days after receiving it to “burn with prejudice”. This involves burning the Badge, claiming half the stake from the issuing entity and penalizing them with a demerit point. This disables the entity from executing any actions on-chain until their new minimum stake is refilled. Every demerit points increases the minimum stake by an exponential amount.
      </p>
    </div>
    <TransactionContainer 
      className={style.transactionContainer}
      isError={!enoughETH} 
      errorMessage={"You might not have enough ETH stake to register this entity"}
    >
      <EstimatedTransaction
        name="Initial stake"
        usdValue={stake ? convertAndFormatWeiToUSD(stake, ethToUsdMultiplier) : '--'}
        cryptoValue={stake ? formatWeiToEthString(stake, 4) : "--"}
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />
      <EstimatedTransaction
        name="Gas fees"
        usdValue={gasFees ? "~"+convertAndFormatWeiToUSD(gasFees, ethToUsdMultiplier) :  "--"}
        cryptoValue={gasFees ? "~"+formatWeiToEthString(gasFees, 5) : "--"}
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />
      <EstimatedTransaction
        name="Total"
        usdValue={stake ? "~"+convertAndFormatWeiToUSD(stake.add(gasFees), ethToUsdMultiplier) : "--"}
        cryptoValue={stake ? "~"+formatWeiToEthString(stake.add(gasFees), 5) : "--"}
        isCryptoPricePending={false}
        isUSDPricePending={false}
      />

    </TransactionContainer>
    <BasicButton 
      text={"Register"}
      style={{marginTop: '20px'}}
      onClick={onRegister}
      isLoading={isButtonLoading}
    />
    <button className={style.backButton} onClick={onBack}>
      Back
    </button>
  </div>
}