import React from 'react';
import style from '../../styles/genesis.module.css'
import { EntityInfo } from '../../schemas/genesis';
import ProgressBar from '../GenericComponents/ProgressBar';
import Lottie from '../GenericComponents/Lottie';
import * as loadingAnimation from '../../public/lottie/loading-dots-big.json'

const DeployEntityLoadingView = (
  { loadingPercentage }:
  { loadingPercentage: number }) => {
  return <div className={style.entryContainer} 
    style={{ height: '260px', justifyContent: 'center' }}>
    {/* <Lottie animationData={loadingAnimation} className={style.loadingAnimation}/> */}
    <div style={{ width: '90%', marginTop: '0px'}}>
      <ProgressBar
        valuePercentage={loadingPercentage}
        customFillerStyle={style.progressBarFiller}
      />
    </div>
    
    <h1 className={style.loadingHeader}>Hang in there, it'll just take a second</h1>
    <span className={style.loadingSubtitle}>Minting Genesis token</span>
  </div>
}

export default DeployEntityLoadingView