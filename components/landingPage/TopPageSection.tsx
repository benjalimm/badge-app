import React from 'react'
import style from '../../styles/landingPage/lp.module.css';
import '../../styles/landingPage/lp.module.css';
import SampleBadgeCard from './SampleBadgeCard';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { BadgeData } from '../../interfaces/BadgeData';
import { BottomTabs } from './BottomTabs';

export default function TopPageSection() {
  const [cardData, setCardData] = useState<BadgeData[]>([]);
  const [indexOfCurrentCard, setIndexOfCurrentCard] = useState<number>(0);
  useEffect(() => {
    const data: BadgeData[] = [
      {
        id: 0,
        title: "Hackathon winner",
        content: "Harry won 'Most Innovative' for his project 'Picture This' in the 2022 Annual Pied Piper Hackathon.",
        videoPath: "/videos/sampleNFTVideos/nft_damien.mp4"
      },
      {
        id: 1,
        title: "Excellence award",
        content: "Lana has demonstrated exemplary performance in her role as a senior software engineer.",
        videoPath: "/videos/sampleNFTVideos/nft_damien_1.mp4"
      },
      {
        id: 2,
        title: "Investor appreciation",
        content: "Jonas has been recognized as a top-performing investor.",
        videoPath: "/videos/sampleNFTVideos/nft_damien_2.mp4"
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

      <div className={style.topPageSectionContainer}>
        <div className={style.cardContainer}>
          <SampleBadgeCard 
            title={cardData[indexOfCurrentCard].title}
            content={cardData[indexOfCurrentCard].content}
            videoSource={cardData[indexOfCurrentCard].videoPath}
            />
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