import React, { useEffect } from 'react';
import style from '../../styles/sampleBadgeCard.module.css';


export default function SampleBadgeCard(
  {  title, content, videoSource, profilePhotoSource }
  : { 
    title: string, 
    content: string, 
    videoSource: string, 
    profilePhotoSource: string }
    ) {
    return <div className={style.sampleBadgeCard}>
      <div className={style.imageContainer}>
        <video autoPlay loop muted src={videoSource}/>
      </div>
      
      <div className={style.bottomContainer}>
        <img className={style.entityImage} src={profilePhotoSource}/>
        <h1 className={style.title}>
          {title}
        </h1>
        <p className={style.content}>
          {content}
        </p>
      </div>
    </div>
}