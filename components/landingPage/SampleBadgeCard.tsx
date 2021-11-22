import React, { useEffect } from 'react';
import style from '../../styles/sampleBadgeCard.module.css';


export default function SampleBadgeCard(
  { 
    title, 
    content, 
    imageLink 
  }: { title: string, content: string, imageLink: string }) {
    return <div className={style.sampleBadgeCard}>
      <div className={style.imageContainer}>
        {imageLink}
      </div>
      <div className={style.bottomContainer}>
        <h1 className={style.title}>
          {title}
        </h1>
        <span>
          {content}
        </span>
      </div>
    </div>
}