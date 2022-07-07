import React, { useEffect } from 'react';
import style from './MediaCatalogue.module.css';
import { BadgeMedia } from '../../../schemas/BadgeMedia';
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

  // ** LISTEN TO KEYBOARD SHORTCUTS ** \\
  useEffect(() => {
    /// Handle escape + back for media catalogue
    function keyDownHandler(event: KeyboardEvent) {
      console.log(`Keydown: ${event.key}`);
      if (event.key === "Escape" || (event.key == "[" && event.metaKey) || event.key === "Enter") {
        event.preventDefault();
        onCancel();
      } else if (event.key === 'ArrowLeft') {
        // left arrow
        event.preventDefault();
        progressMediaIndexBy(-1);
      } else if (event.key === 'ArrowRight') {
        // right arrow
        event.preventDefault();
        progressMediaIndexBy(1);
        
      } else if (event.key === 'ArrowUp') {
        // up arrow
        event.preventDefault();
        progressMediaIndexBy(-2);
        
      } else if (event.key === 'ArrowDown') {
        // down arrow
        event.preventDefault();
        progressMediaIndexBy(2);
      }
    }

    document.addEventListener('keydown', keyDownHandler, true);
    return () => {
      document.removeEventListener('keydown', keyDownHandler, true);
    }
  }, [indexOfCurrentlySelectedMedia])

  function progressMediaIndexBy(delta: number) {
    
    const newIndex = indexOfCurrentlySelectedMedia + delta;
    console.log(`Index: ${indexOfCurrentlySelectedMedia} , newIndex: ${newIndex}`);
    if (newIndex >= 0 && newIndex < badgeMediaList.length) {
      onBadgeMediaSelect(newIndex);
    }
  }

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