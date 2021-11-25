import React from 'react'
import style from '../../styles/lp.module.css';
import SampleBadgeCard from './SampleBadgeCard';
export default function TopPageSection() {
  return (
    <div className={style.lpPageSection}>

      <div className={style.topPageSectionContainer}>

        <SampleBadgeCard 
        title={"Hackathon"}
        content={"John Doe won the award for best hackathon"}
        imageLink={"imageLink"}
        />
        
        <div>
          <h1 className={style.badgeHeaderText}>
          Achievements as NFTs.
          </h1>
          <h3 className={style.badgeNormalText}>
            Web3 infrastructure for merit.
          </h3>

        </div>
        
      </div>

    </div>
  )
}