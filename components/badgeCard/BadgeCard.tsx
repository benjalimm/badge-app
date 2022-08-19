import React, { useEffect } from 'react';
import style from './BadgeCard.module.css';
import cx from 'classnames';
import AutoPlayVideoView from '../GenericComponents/AutoPlayVideoView';
import { shortenAddress } from '../../utils/generic/addressUtils';
export type WalletIdentifierType = "ENS" | "ADDRESS" | "NONE";
export default function BadgeCard(
  {  
    title, 
    content, 
    videoSource, 
    customStyle, 
    level, 
    entityName,
    walletIdentifier,
    identifierType
  }: { 
    title: string, 
    content: string, 
    level: number,
    entityName: string,
    walletIdentifier: string | null,
    identifierType: WalletIdentifierType,
    videoSource: string, 
    customStyle?: React.CSSProperties
  }
) {

  function shortenIdentifier(identifier: string | null) {
    if (identifier === null || identifier === undefined) {
      return "" 
    } else {
      if (identifier.length > 10) {
        return `${identifier.substring(0, 10)}...`;
      }
    }
    return identifier;
  }

  function getIdentifier(): string {
    switch (identifierType) {
      case "ADDRESS":
        return shortenAddress(walletIdentifier);
      case "ENS":
        return walletIdentifier;
      default:
        return ""
    }
  }

  return <div className={cx(style.badgeCard, style.cardShadow)} style={customStyle}>
    <div className={style.imageContainer}>
      <div className={style.videoOverlayContainer}> 

        <div className={style.levelContainer}>
          <h1 className={style.levelLabel}>L {level}</h1>
        </div>
      
      </div> 
      <AutoPlayVideoView  source={videoSource}/>
    </div>
    
    <div className={style.bottomContainer}>
      
      <div className={style.contentContainer}>
        <h1 className={style.userLabel}>{`${entityName} -> ${getIdentifier()}`}</h1>
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