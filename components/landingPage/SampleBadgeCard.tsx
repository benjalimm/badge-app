import React from 'react';
import style from '../../styles/landingPage/sampleBadgeCard.module.css';
import cx from 'classnames';
import AutoPlayVideoView from '../GenericComponents/AutoPlayVideoView';
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
      <AutoPlayVideoView source={videoSource}/>
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

