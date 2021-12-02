import React from 'react'
import style from '../../styles/lp.module.css';
import SampleBadgeCard from './SampleBadgeCard';
import cx from 'classnames';
export default function TopPageSection() {
  return (
    <div className={cx(style.lpPageSection, style.blueWhiteGradient)}>

      <div className={style.topPageSectionContainer}>

        <SampleBadgeCard 
        title={"Hackathon 2022"}
        content={"Harry won 'Most Innovative' for his hackathon project 'Picture This' for the 2022 Annual Pied Piper Hackathon."}
        imageLink={"imageLink"}
        />
        
        <div className={style.textContainer}>
          <h1 className={style.badgeHeaderText}>
          Achievements as NFTs.
          </h1>
          <h3 className={style.badgeNormalText}>
            The web3 infrastructure for merit.
          </h3>

        </div>
        
      </div>

    </div>
  )
}