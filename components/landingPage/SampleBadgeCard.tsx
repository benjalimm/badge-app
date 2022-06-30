import React from 'react';
import style from './SampleBadgeCard.module.css';
import cx from 'classnames';
import AutoPlayVideoView from '../GenericComponents/AutoPlayVideoView';
export default function SampleBadgeCard(
  {  title, content, videoSource, visible, level, entityName, recipient }
  : { 
    title: string, 
    content: string, 
    videoSource: string, 
    visible: boolean,
    level: number,
    entityName: string,
    recipient: string,
  }
) {
  const visibility = visible ? 'flex' : 'none';
  return <div className={cx(style.sampleBadgeCard, style.landingPageAnimation)} style={{ display : visibility}}>
    <div className={style.imageContainer}>
      <div className={style.videoOverlayContainer}> 

        <div className={style.levelContainer}>
          <h1 className={style.levelLabel}>L {level}</h1>
        </div>
      
      </div> 
      <AutoPlayVideoView source={videoSource}/> 
    </div>

    <div className={style.bottomContainer}>
      <div className={style.contentContainer}>
        <h1 className={style.userLabel}>{`${entityName} -> ${recipient}`}</h1>
        <h1 className={style.title}>
          {title}
        </h1>
        <p className={style.content}>
          {content}
        </p>

      </div>
      
    </div>
  </div>
}

