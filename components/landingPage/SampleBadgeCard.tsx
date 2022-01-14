import React from 'react';
import style from '../../styles/landingPage/sampleBadgeCard.module.css';
import cx from 'classnames';
export default function SampleBadgeCard(
  {  title, content, videoSource, profilePhotoSource, visible }
  : { 
    title: string, 
    content: string, 
    videoSource: string, 
    profilePhotoSource: string,
    visible: boolean,
  }
) {
  const visibility = visible ? 'flex' : 'none';
  return <div className={cx(style.sampleBadgeCard, style.landingPageAnimation)} style={{ display : visibility}}>
    <div className={style.imageContainer}>
      {/* <video preload="meta" autoPlay loop muted src={videoSource}/>  */}
      <div dangerouslySetInnerHTML={{ __html: `<video autoPlay loop muted playsinline src="${videoSource}"/>` }}/>
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