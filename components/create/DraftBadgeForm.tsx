import React, { useState, useEffect } from 'react';
import style from './DraftBadge.module.css'
import FormTextBoxContainer from './FormTextBoxContainer';
import { BadgeMedia } from '../../schemas/BadgeMedia';
import { Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { getEthUSDPrice } from "../../utils/getEthPrice";
import cx from 'classnames';
import { calculateBadgePrice } from '../../utils/priceOracleUtils';
import USDConverter from '../../utils/USDConverter';
import { calculateBXP } from '../../utils/badgeXPUtils';

export default function DraftBadgeForm({ 
  currentlySelectedMedia, 
  onTitleChange, 
  onDescriptionTextChange,
  onPresentMediaCatalogue,
  badgeTitle,
  badgeDescription,
  badgeLevel,
  setBadgeLevel,
  baseBadgePriceInEth,
  displayWarning
}: 
{ currentlySelectedMedia: BadgeMedia,
  onTitleChange: (event: React.FormEvent<HTMLInputElement>) => void,
  onDescriptionTextChange: (event: React.FormEvent<HTMLTextAreaElement>) => void,
  onPresentMediaCatalogue: () => void,
  badgeTitle: string,
  badgeDescription: string,
  badgeLevel: number,
  setBadgeLevel: (level: number) => void,
  baseBadgePriceInEth: number,
  displayWarning: boolean,
}) {

  // ** ETH PRICE INFO ** \\
  const [ethPrice, setEthPrice] = useState<number>(0);
  const [subscriptionId, setSubscriptionId] = useState<number>(0);

  useEffect(() => {
    // Listen to latest eth price updates
    const id = USDConverter.subscribeToEthUSDPriceUpdates(_ethPrice => {
      setEthPrice(_ethPrice);
    })
    setSubscriptionId(id);
    return () => {
      USDConverter.stopSubscribing(subscriptionId);
    }
  }, [])

  return <div className={style.formContainer}>
    <div className={style.mediaContainer}>
      <h1 className={style.mediaSelectionHeader}>Media</h1>
      <div className={style.mediaSelectionBox}>
        <span className={style.mediaSelectionText}>
          {`${currentlySelectedMedia.mediaType} - ${currentlySelectedMedia.id} - ${currentlySelectedMedia.name}`}</span>
        <button 
          className={style.mediaSelectButton} 
          onClick={onPresentMediaCatalogue}>
            Select media
        </button>
      </div>
          
    </div>
    <BadgeLevelListBox 
      badgeLevel={badgeLevel} 
      baseBadgePriceInEth={baseBadgePriceInEth}
      ethPriceInUSD={ethPrice}
      setBadgeLevel={setBadgeLevel}/>
    <FormTextBoxContainer 
      type="TextBox"
      title='Badge title' 
      placeholder='Enter Badge name (e.g. Hackathon winner)'
      onChange={onTitleChange}
      value={badgeTitle}
      highlight={displayWarning ? "ERROR" : undefined}
      message={"Title is required"}
    />
    
    <FormTextBoxContainer 
      type="TextArea"  
      title='Short description (optional)' 
      placeholder='Enter info (Why did they get this Badge?)'
      customTextBoxHeight='120px'
      onChange={onDescriptionTextChange}
      value={badgeDescription}
    />
  </div>
}

function BadgeLevelListBox(
  { 
    badgeLevel, 
    setBadgeLevel, 
    baseBadgePriceInEth, 
    ethPriceInUSD
  } : { 
    badgeLevel: number, 
    baseBadgePriceInEth: number, 
    ethPriceInUSD: number, 
    setBadgeLevel: (level: number) => void 
  }) {

  let supportedLevels = [0, 1, 2, 3, 4, 5, 6, 7];

  function getBadgePrice(currency: "USD" | "ETH", level: number): number {
    const badgePriceInEth = calculateBadgePrice(baseBadgePriceInEth, level)
    return currency == "ETH" ? badgePriceInEth : badgePriceInEth * ethPriceInUSD;
  }

  function getDetails(level: number): string {
    return (level > 0) ? 
      `${getBadgePrice("ETH", level).toFixed(5)} ETH ($${getBadgePrice("USD", level).toFixed(2)}) - ${calculateBXP(level).toFixed(0)} BXP` : "FREE (not inc gas) - 0 BXP";
  }

  function getLevelTitle(level: number): string {
    return `Level ${level} - ${getDetails(level)}`
  }

  return (
    <div className={style.listBoxContainer}>
      <h1 className={style.formTextBoxTitle}>Badge level</h1>
      <div className={cx(style.listBoxWrapper, "shadow-sm")}>
        <Listbox value={badgeLevel} onChange={setBadgeLevel}>
          <div className={style.listBox}>
            <Listbox.Button className={style.listBoxButton}>
              <span className={style.listBoxTitle}>
                {getLevelTitle(badgeLevel)}
              </span>
              <SelectorIcon
                className={style.selector}
                
              />
            </Listbox.Button>
            <Listbox.Options className={cx(style.listBoxOptionsContainer, "shadow-sm")}>
              {(supportedLevels).map((level) => (
                <Listbox.Option
                  key={level}
                  className={style.listBoxOption}
                  value={level}
                >
                  <span className={style.listBoxTitle} style={{ fontWeight: level == badgeLevel ? 'bold' : 'normal'}}>
                    {getLevelTitle(level)}
                  </span>
                  {
                    level === badgeLevel ? 
                      <CheckIcon className={style.checkIcon}/> : null
                  }
                  
                </Listbox.Option>
              
              ))}
            </Listbox.Options>

          </div>
        
        </Listbox>
      
      </div>

    </div>
       
  )
}