import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BadgeMedia } from '../../schemas/BadgeMedia';
import style from '../../styles/create/badgeVideoScrollView.module.css'
export default function BadgeVideoScrollView({ 
  listOfMedia, 
  indexOfCurrentlySelectedMedia 
} : 
{ listOfMedia: BadgeMedia[],
  indexOfCurrentlySelectedMedia: number 
}) {

  return <div className={style.scrollView}>
    <ScrollMenu>
      {
        listOfMedia.map(media => {
          return <Card media={media} key={media.id}/>
        })
      }

    </ScrollMenu>
    
  </div>
}

function Card({ media }: { media: BadgeMedia }) {
  return <div className={style.card}>
    <video preload="meta" autoPlay loop muted src={media.url}/> 
  </div>
}
