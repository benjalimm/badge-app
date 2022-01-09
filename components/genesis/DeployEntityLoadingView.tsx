import React from 'react';
import style from '../../styles/genesis.module.css'
import { EntityInfo } from '../../schemas/genesis';

const DeployEntityLoadingView = () => {
  return <div className={style.entryContainer} style={{ height: '260px' }}>
    <img className={style.blackBadge} src="/images/blackBadge.svg"/>
    <h1 className={style.loadingHeader}>Deploying entity</h1>
    <span className={style.loadingSubtitle}>Minting Genesis token</span>
  </div>
}

export default DeployEntityLoadingView