import React, { useState } from 'react';
import style from '../../styles/create/loadingView.module.css'
import ProgressBar from '../GenericComponents/ProgressBar';

const MintBadgeLoadingView = (
  { loadingPercentage }:
  { loadingPercentage: number }) => {
  return <div className={style.entryContainer} 
    style={{ height: '260px', justifyContent: 'center' }}>
    <div style={{ width: '90%', marginTop: '0px'}}>
      <ProgressBar
        valuePercentage={loadingPercentage}
        customFillerStyle={style.progressBarFiller}
      />
    </div>
    
    <h1 className={style.loadingHeader}>Hang in there, it'll just take a second</h1>
    <span className={style.loadingSubtitle}>Minting Badge</span>
  </div>
}

export default MintBadgeLoadingView