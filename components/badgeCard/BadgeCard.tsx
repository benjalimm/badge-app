import React, { useEffect } from 'react';
import style from '../../styles/badgeCard.module.css';
import cx from 'classnames';
export default function BadgeCard(
  {  title, content, videoSource, profilePhotoSource }
  : { 
    title: string, 
    content: string, 
    videoSource: string, 
    profilePhotoSource: string,
  }
) {
  return <div className={cx(style.badgeCard, style.cardShadow)}>
    <div className={style.imageContainer}>
      <video preload="meta" autoPlay loop muted src={videoSource}/> 
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