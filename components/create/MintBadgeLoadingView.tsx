<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> main
import style from '../../styles/create/loadingView.module.css'
import ProgressBar from '../GenericComponents/ProgressBar';

const MintBadgeLoadingView = (
  { loadingPercentage }:
  { loadingPercentage: number }) => {
<<<<<<< HEAD

  const subtitle = "Interfacing with the decentralized web"
  return <div className={style.entryContainer}>
=======
  return <div className={style.entryContainer} 
    style={{ height: '260px', justifyContent: 'center' }}>
>>>>>>> main
    <div style={{ width: '90%', marginTop: '0px'}}>
      <ProgressBar
        valuePercentage={loadingPercentage}
        customFillerStyle={style.progressBarFiller}
      />
    </div>
    
<<<<<<< HEAD
    <h1 className={style.loadingHeader}>Minting Badge</h1>
    <span className={style.loadingSubtitle}>{ subtitle }</span>
=======
    <h1 className={style.loadingHeader}>Hang in there, it'll just take a second</h1>
    <span className={style.loadingSubtitle}>Minting Badge</span>
>>>>>>> main
  </div>
}

export default MintBadgeLoadingView