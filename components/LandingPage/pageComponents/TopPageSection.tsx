import React from 'react'
import style from './TopPageSection.module.css';
import SampleBadgeCard from './SampleBadgeCard';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { BottomTabs } from './BottomTabs';
import cardData from '../../../utils/sampleCardData';

export default function TopPageSection() {
  const [indexOfCurrentCard, setIndexOfCurrentCard] = useState<number>(0);

  function onTabClick(index: number) {
    setIndexOfCurrentCard(index);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (indexOfCurrentCard) == (cardData.length - 1) ? 0 : indexOfCurrentCard + 1;
      setIndexOfCurrentCard(nextIndex);
    }, 8000)
    return () => clearInterval(interval);
  }, [indexOfCurrentCard])

  if (cardData.length == 0) { return null }
  return (
    <div className={cx(style.lpPageSection, style.blueWhiteGradient)}>
      <div className={cx(style.topPageSectionContainer)}>
        <div className={style.whiteNoise}/>
      
        <div className={style.textContainer}>
          <h1 className={style.badgeHeaderText}>
          Achievements as NFTs.
          </h1>
          <h3 className={style.badgeNormalText}>
            Attract & reward talent with on-chain merit.
          </h3>
        </div>   
        <div className={style.cardContainer}>
          { cardData.map((card, index) => {
            return <SampleBadgeCard 
              key={index}
              title={card.title}
              content={card.content}
              videoSource={card.videoPath}
              visible={index === indexOfCurrentCard}
              level={card.level}
              entityName={card.entityName}
              recipient={card.recipientEns}
            />
      
          })
          }
          <BottomTabs 
            numberOfTabs={cardData.length} 
            indexOfHighlightedTab={indexOfCurrentCard}
            onClick={onTabClick}
          />
        </div>
             
      </div>
    </div>
  )
}