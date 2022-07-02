import React from 'react';
import style from './MediaCatalogue.module.css';
import { BadgeMedia } from '../../schemas/BadgeMedia';
import cx from 'classnames'
import { BarLoader, ClipLoader } from 'react-spinners';
// import { badgeMediaList } from '../../utils/badgeMediaList';

export default function MediaCatalogueView({ 
  onCancel, 
  badgeMediaList, 
  indexOfCurrentlySelectedMedia, 
  onBadgeMediaSelect
}: {
  onCancel: () => void, 
  onBadgeMediaSelect: (index: number) => void,
  badgeMediaList: BadgeMedia[],
  indexOfCurrentlySelectedMedia: number,
}) {

  function onSelect(index: number){
    onBadgeMediaSelect(index);
  }

  return <div className={cx(style.container)}>
    <div className={style.navBar}>
      <button className={style.leaveButton} onClick={onCancel}>
      Back
      </button>
      <h1 className={style.header}>Scroll & select media</h1>
    </div>
    
    <div className={style.mediaTileView}>
      { badgeMediaList.map((badgeMedia, index) => { 
        return <MediaTile 
          media={badgeMedia} 
          key={index}
          index={index}
          selected={index === indexOfCurrentlySelectedMedia}
          onSelect={onSelect}
        />
      })
      }

    </div>
  </div>
}

function MediaTile({ media, index, selected, onSelect }: { media: BadgeMedia, selected: boolean, index: number, onSelect: (index: number) => void }) {
  const maskClasses = !selected ? style.mediaTileVideoMask : cx(style.mediaTileVideoMask, style.isSelected);

  function onClick() {
    onSelect(index);
  }

  return <div className={style.mediaTile} onClick={onClick}>
    <div className={maskClasses}>
      <video className={style.mediaTileVideo} preload="meta" autoPlay loop muted src={media.url}/> 
    </div>
  </div>
}