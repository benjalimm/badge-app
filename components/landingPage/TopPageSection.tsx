import React from 'react'
import style from '../../styles/landingPage/lp.module.css';
import '../../styles/landingPage/lp.module.css';
import SampleBadgeCard from './SampleBadgeCard';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { BadgeData } from '../../schemas/BadgeData';
import { BottomTabs } from './BottomTabs';

export default function TopPageSection() {
  const [cardData, setCardData] = useState<BadgeData[]>([]);
  const [indexOfCurrentCard, setIndexOfCurrentCard] = useState<number>(0);
  useEffect(() => {
    const data: BadgeData[] = [
      {
        id: 0,
        title: "Hackathon winner",
        content: "Harry won 'Most Innovative' for his project 'Picture This' for our Annual Hackathon in 2022.",
        videoPath: "https://www.dropbox.com/s/3hxkg9xp59au5qu/nft_damien.mp4?raw=1",
        profilePhotoSource: "/images/landingPage/coinbase_logo.jpeg"
      },
      {
        id: 1,
        title: "PR approved",
        content: "Lana's pull request for her implementation of the sign up page was approved and merged.",
        videoPath: "https://www.dropbox.com/s/0i6pqnhc6iasgdw/nft_damien_2.mp4?raw=1",
        profilePhotoSource: "/images/landingPage/uniswap_logo.jpeg"
      },
      {
        id: 2,
        title: "Early investor",
        content: "Jon was an early backer in the company. He not only invested his money but his time to help us get the product off the ground.",
        videoPath: "https://www.dropbox.com/s/t7wtofo81fmdwhp/nft_damien_1.mp4?raw=1",
        profilePhotoSource: "/images/landingPage/opensea_logo.png"
      },
    ];
    setCardData(data);
  }, [])

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
        <div className={style.cardContainer}>
          { cardData.map((card, index) => {
            return <SampleBadgeCard 
              key={index}
              title={card.title}
              content={card.content}
              videoSource={card.videoPath}
              profilePhotoSource={card.profilePhotoSource}
              visible={index === indexOfCurrentCard}
            />
      
          })
          }
 
          <BottomTabs 
            numberOfTabs={cardData.length} 
            indexOfHighlightedTab={indexOfCurrentCard}
          />
        </div>
        
        <div className={style.textContainer}>
          <h1 className={style.badgeHeaderText}>
          Achievements as NFTs.
          </h1>
          <h3 className={style.badgeNormalText}>
            On-chain merit for internet organizations.
          </h3>
        </div>        
      </div>
    </div>
  )
}