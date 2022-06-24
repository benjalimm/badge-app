import React, { useState, useEffect } from 'react';
import style from './MintBadgeLoadingView.module.css'
import ProgressBar from '../GenericComponents/ProgressBar';

const MintBadgeLoadingView = (
  { loadingPercentage }:
  { loadingPercentage: number }) => {

  const subtitle = "Interfacing with the decentralized web"
  return <div className={style.entryContainer}>
    <div style={{ width: '90%', marginTop: '0px'}}>
      <ProgressBar
        valuePercentage={loadingPercentage}
        customFillerStyle={style.progressBarFiller}
      />
    </div>
    
    <h1 className={style.loadingHeader}>Minting Badge</h1>
    <span className={style.loadingSubtitle}>{ subtitle }</span>
  </div>
}

export default MintBadgeLoadingView