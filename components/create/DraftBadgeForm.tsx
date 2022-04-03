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
  badgeDescription 
}: 
{ currentlySelectedMedia: BadgeMedia,
  onTitleChange: (event: React.FormEvent<HTMLInputElement>) => void,
  onDescriptionTextChange: (event: React.FormEvent<HTMLTextAreaElement>) => void,
  onPresentMediaCatalogue: () => void,
  badgeTitle: string,
  badgeDescription: string
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
    <BadgeLevelListBox/>
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

function BadgeLevelListBox() {

  const [selectedLevel, setSelectedLevel] = useState(1)
  let supportedLevels = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10]

  function calculateBadgePrice(level: number): number {
    const basePrice = 5
    const multiplier = Math.pow(2.5, level - 1)
    return (basePrice) * multiplier
  }

  function getLevelTitle(level: number): string {
    return `Level ${level} ($${calculateBadgePrice(level).toFixed(2)} DAI)`
  }

  return (
    <div className={cx(style.listBoxContainer, "shadow-sm")}>
      <Listbox value={selectedLevel} onChange={setSelectedLevel}>
        <div className={style.listBox}>
          <Listbox.Button className={style.listBoxButton}>
            <span className={style.listBoxTitle}>
              {getLevelTitle(selectedLevel)}
            </span>
            <SelectorIcon
              className={style.selector}
              aria-hidden="true"
            />
          </Listbox.Button>
          <Listbox.Options className={cx(style.listBoxOptionsContainer, "shadow-sm")}>
            {(supportedLevels).map((level) => (
              <Listbox.Option
                key={level}
                className={style.listBoxOption}
                value={level}
              >
                <span className={style.listBoxTitle}>
                  {getLevelTitle(level)}
                </span>
                {
                  level === selectedLevel ? 
                    <CheckIcon className={style.checkIcon}/> : null
                }
                  
              </Listbox.Option>
              
            ))}
          </Listbox.Options>

        </div>
        
      </Listbox>
      
    </div>
    
  )
}