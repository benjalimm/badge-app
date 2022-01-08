import React from 'react';
import style from '../../styles/create/mediaCatalogue.module.css';
import { BadgeMedia } from '../../schemas/BadgeMedia';
import cx from 'classnames'
// import { badgeMediaList } from '../../utils/badgeMediaList';

export default function MediaCatalogueView({ onCancel, badgeMediaList }: {
  onCancel: () => void, 
  badgeMediaList: BadgeMedia[]
}) {
  return <div className={cx(style.container, style.gradientBorder)}>
    <h1 className={style.header}>Pick media</h1>
    <div className={style.mediaTileView}>
      { badgeMediaList.map((badgeMedia, index) => { 
        return <MediaTile 
          media={badgeMedia} 
          key={index}
        />
      })
      }

    </div>
    <button className={style.leaveButton} onClick={onCancel}>
      Back to draft
    </button>
  </div>
}

function MediaTile({ media }: { media: BadgeMedia }) {
  return <div className={style.mediaTile}>
    <video preload="meta" autoPlay loop muted src={media.url}/> 
  </div>
}