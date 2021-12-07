import React from 'react'
import style from '../../styles/lp.module.css';
import '../../styles/lp.module.css';
import SampleBadgeCard from './SampleBadgeCard';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { BadgeData } from '../../interfaces/BadgeData';
import { TransitionGroup, CSSTransition } from "react-transition-group";


export default function TopPageSection() {
  const [cardData, setCardData] = useState<BadgeData[]>([]);
  const [indexOfCurrentCard, setIndexOfCurrentCard] = useState<number>(0);
  useEffect(() => {
    const data: BadgeData[] = [
      {
        id: 0,
        title: "Hackathon 2022",
        content: "Harry won 'Most Innovative' for his hackathon project 'Picture This' for the 2022 Annual Pied Piper Hackathon.",
        videoPath: "/videos/sampleNFTVideos/nft_damien.mp4"
      },
      {
        id: 1,
        title: "Excellence award",
        content: "Lana put her head down on a 2 month long sprint in order to get our mobile app to market. She demonstrated focus and utmost professionalism in leading our team to finally ship this.",
        videoPath: "/videos/sampleNFTVideos/nft_damien_1.mp4"
      },
      {
        id: 2,
        title: "Investor appreciation",
        content: "John has gone above and beyond as an investor, mentor and adviser. We met John in the first year of building Pied Piper, when he lead our pre-seed round. Through every low and high, John has been there to guide us through it.",
        videoPath: "/videos/sampleNFTVideos/nft_damien_2.mp4"
      },
    ];
    setCardData(data);
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (indexOfCurrentCard) == (cardData.length - 1) ? 0 : indexOfCurrentCard + 1;
      setIndexOfCurrentCard(nextIndex);
    }, 2000)
    return () => clearInterval(interval);
  }, [indexOfCurrentCard])

  if (cardData.length == 0) { return null }
  return (
    <div className={cx(style.lpPageSection, style.blueWhiteGradient)}>

      <div className={style.topPageSectionContainer}>
        <TransitionGroup>
          <CSSTransition key={cardData[indexOfCurrentCard].id} classNames="transition" timeout={300}>
            <SampleBadgeCard 
            title={cardData[indexOfCurrentCard].title}
            content={cardData[indexOfCurrentCard].content}
            videoSource={cardData[indexOfCurrentCard].videoPath}
            />
          </CSSTransition>
        </TransitionGroup>
        <div className={style.textContainer}>
          <h1 className={style.badgeHeaderText}>
          Achievements as NFTs.
          </h1>
          <h3 className={style.badgeNormalText}>
            Infrastructure for on-chain merit.
          </h3>
        </div>        
      </div>
    </div>
  )
}