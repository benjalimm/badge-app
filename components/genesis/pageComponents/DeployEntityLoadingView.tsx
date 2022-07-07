import React from 'react';
import style from './DeployEntityLoadingView.module.css';
import ProgressBar from '../../GenericComponents/ProgressBar';

const DeployEntityLoadingView = (
  { loadingPercentage }:
  { loadingPercentage: number }) => {
  return <div className={style.container} 
    style={{ height: '200px', justifyContent: 'center' }}>
    <div style={{ width: '90%', marginTop: '0px'}}>
      <ProgressBar
        valuePercentage={loadingPercentage}
        customFillerStyle={style.progressBarFiller}
      />
    </div>
    
    <h1 className={style.loadingHeader}>Deploying entity on-chain</h1>
    <span className={style.loadingSubtitle}>Minting Genesis token...</span>
  </div>
}

export default DeployEntityLoadingView