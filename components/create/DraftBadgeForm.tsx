import React, { useState } from 'react';
import style from '../../styles/create/draftBadge.module.css'
import FormTextBoxContainer from './FormTextBoxContainer';
import { BadgeMedia } from '../../schemas/BadgeMedia';
import { Listbox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import cx from 'classnames';

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
    <BadgeLevelListBox badgeLevel={badgeLevel} setBadgeLevel={setBadgeLevel}/>
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
  { badgeLevel, setBadgeLevel} : 
  { badgeLevel: number, setBadgeLevel: (level: number) => void }) {

  let supportedLevels = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10]

  function calculateBadgePrice(level: number, currency: "USD" | "ETH"): number {
    const basePrice = currency == "ETH" ? 0.002428 : 5;
    const multiplier = Math.pow(2.5, level - 1)
    return (basePrice) * multiplier
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
      `${calculateBadgePrice(level, "ETH").toFixed(5)} ETH ($${calculateBadgePrice(level, "USD").toFixed(2)}) - ${calculateBXP(level).toFixed(0)} BXP` : "FREE (not inc gas) - 0 BXP";
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