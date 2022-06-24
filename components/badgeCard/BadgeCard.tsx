import React, { useEffect } from 'react';
import style from './BadgeCard.module.css';
import cx from 'classnames';
export default function BadgeCard(
  {  title, content, videoSource, profilePhotoSource, customStyle }
  : { 
    title: string, 
    content: string, 
    videoSource: string, 
    profilePhotoSource: string,
    customStyle?: React.CSSProperties
  }
) {
  return <div className={cx(style.badgeCard, style.cardShadow)} style={customStyle}>
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