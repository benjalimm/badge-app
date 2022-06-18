import React, { useState ,useEffect } from 'react';
import style from '../../styles/create/draftBadge.module.css'
import FormTextBoxContainer from './FormTextBoxContainer';
import { BadgeMedia } from '../../schemas/BadgeMedia';
import { Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { getEthUSDPrice } from "../../utils/getEthPrice";
import cx from 'classnames';
import { calculateBadgePrice } from '../../utils/badgePricingUtils';
import { ethers } from 'ethers';
import { BadgePriceOracle__factory, BadgeRegistry__factory, BadgeRegistry, BadgePriceOracle } from '../../typechain';
import { useSigner } from 'wagmi';
import { badgeContractAddress } from '../../configs/blockchainConfig';

export default function DraftBadgeForm({ 
  currentlySelectedMedia, 
  onTitleChange, 
  onDescriptionTextChange,
  onPresentMediaCatalogue,
  badgeTitle,
  badgeDescription,
  badgeLevel,
  setBadgeLevel
}: 
{ currentlySelectedMedia: BadgeMedia,
  onTitleChange: (event: React.FormEvent<HTMLInputElement>) => void,
  onDescriptionTextChange: (event: React.FormEvent<HTMLTextAreaElement>) => void,
  onPresentMediaCatalogue: () => void,
  badgeTitle: string,
  badgeDescription: string,
  badgeLevel: number,
  setBadgeLevel: (level: number) => void
}) {

  // ** ** \\
  const [ethPrice, setEthPrice] = useState<number>(0);
  const [baseBadgePrice, setBaseBadgePrice] = useState<number>(0);
  const { data:signer } = useSigner()

  useEffect(() => {
    getEthUSDPrice().then(_ethPrice => {
      setEthPrice(_ethPrice);
    }).catch(err => {
      console.error(err);
    })
  }, [])

  useEffect(() => {
    const registry = BadgeRegistry__factory.connect(badgeContractAddress, signer)
    registry.badgePriceOracle().then(oracleAddress => {
      console.log(`Oracle address: ${oracleAddress}`)
      const oracle = BadgePriceOracle__factory.connect(oracleAddress, signer);
      return oracle.baseBadgePrice()
    }).then(_basePrice => {
      setBaseBadgePrice(_basePrice.toNumber());
    }).catch(err => {
      console.log("Error with getting base badge price")
      console.error(err);
    })
    
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
    <FormTextBoxContainer 
      type="TextBox"
      title='Badge name' 
      placeholder='Enter Badge name (e.g. Hackathon winner)'
      onChange={onTitleChange}
      value={badgeTitle}
    />
    <BadgeLevelListBox 
      badgeLevel={badgeLevel} 
      baseBadgePriceInWei={baseBadgePrice}
      ethPriceInUSD={ethPrice}
      setBadgeLevel={setBadgeLevel}/>
    <FormTextBoxContainer 
      type="TextArea"  
      title='Short description' 
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
    baseBadgePriceInWei, 
    ethPriceInUSD
  } : { 
    badgeLevel: number, 
    baseBadgePriceInWei: number, 
    ethPriceInUSD: number, 
    setBadgeLevel: (level: number) => void 
  }) {

  let supportedLevels = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10]

  function getBadgePrice(currency: "USD" | "ETH"): number {
    const badgePriceInWei = calculateBadgePrice(baseBadgePriceInWei, badgeLevel)
    const badgePriceInEth = badgePriceInWei * 1000000000000000000;
    return currency == "ETH" ? badgePriceInEth : badgePriceInEth * ethPriceInUSD;
  }

  function calculateBXP(level:number): number {
    const baseXP = 10;
    
    if (level > 0) {

      let totalXP = 0
      for (let i = level; i > 0; i--) {
        const xp = (baseXP) + (0.25 * totalXP)
        totalXP += xp;
      }
      return totalXP 
    }
    
    return 0
  }

  function getDetails(level: number): string {
    return (level > 0) ? 
      `${getBadgePrice("ETH").toFixed(5)} ETH ($${getBadgePrice("USD").toFixed(2)}) - ${calculateBXP(level).toFixed(0)} BXP` : "FREE (not inc gas) - 0 BXP";
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