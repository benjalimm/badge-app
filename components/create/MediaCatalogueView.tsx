import React from 'react';
import style from '../../styles/create/mediaCatalogue.module.css';
import { BadgeMedia } from '../../schemas/BadgeMedia';

export default function MediaCatalogueView({ onCancel }: {onCancel: () => void}) {
  return <div className={style.container}>
    <h1 className={style.header}>Pick media</h1>
    <button className={style.leaveButton} onClick={onCancel}>
      Back to draft
    </button>
  </div>
}

function MediaTile({ media }: { media: BadgeMedia }) {
  return <div>
    
  </div>
}