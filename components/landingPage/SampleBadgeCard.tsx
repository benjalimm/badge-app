import React, { useEffect } from 'react';
import style from '../../styles/sampleBadgeCard.module.css';


export default function SampleBadgeCard(
  { 
    title, 
    content, 
    imageLink 
  }: { title: string, content: string, imageLink: string }) {
    return <div className={style.sampleBadgeCard}>
      <div className={style.imageContainer}>
        <video autoPlay loop muted>
          <source src="/videos/sampleNFTVideos/nft_damien.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className={style.bottomContainer}>
        <h1 className={style.title}>
          {title}
        </h1>
        <p className={style.content}>
          {content}
        </p>
      </div>
    </div>
}