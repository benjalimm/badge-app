import React from 'react';
<<<<<<< HEAD
import style from './SampleBadgeCard.module.css';
=======
import style from '../../styles/landingPage/sampleBadgeCard.module.css';
>>>>>>> main
import cx from 'classnames';
import AutoPlayVideoView from '../GenericComponents/AutoPlayVideoView';
export default function SampleBadgeCard(
  {  title, content, videoSource, profilePhotoSource, visible, level, entityName, recipient }
  : { 
    title: string, 
    content: string, 
    videoSource: string, 
    profilePhotoSource: string,
    visible: boolean,
<<<<<<< HEAD
    level: number,
    entityName: string,
    recipient: string,
=======
>>>>>>> main
  }
) {
  const visibility = visible ? 'flex' : 'none';
  return <div className={cx(style.sampleBadgeCard, style.landingPageAnimation)} style={{ display : visibility}}>
    <div className={style.imageContainer}>
<<<<<<< HEAD
      <div className={style.videoOverlayContainer}> 

        <div className={style.levelContainer}>
          <h1 className={style.levelLabel}>L {level}</h1>
        </div>
      
      </div> 
      <AutoPlayVideoView source={videoSource}/> 
=======
      <AutoPlayVideoView source={videoSource}/>
>>>>>>> main
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

