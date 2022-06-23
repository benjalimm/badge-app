import React from 'react';
import style from '../../styles/genesis.module.css'
import ProgressBar from '../GenericComponents/ProgressBar';

const DeployEntityLoadingView = (
  { loadingPercentage }:
  { loadingPercentage: number }) => {
  return <div className={style.entryContainer} 
<<<<<<< HEAD
    style={{ height: '200px', justifyContent: 'center' }}>
=======
    style={{ height: '260px', justifyContent: 'center' }}>
>>>>>>> main
    <div style={{ width: '90%', marginTop: '0px'}}>
      <ProgressBar
        valuePercentage={loadingPercentage}
        customFillerStyle={style.progressBarFiller}
      />
    </div>
    
<<<<<<< HEAD
    <h1 className={style.loadingHeader}>Deploying entity on-chain</h1>
    <span className={style.loadingSubtitle}>Minting Genesis token...</span>
=======
    <h1 className={style.loadingHeader}>Hang in there, it'll just take a second</h1>
    <span className={style.loadingSubtitle}>Minting Genesis token</span>
>>>>>>> main
  </div>
}

export default DeployEntityLoadingView