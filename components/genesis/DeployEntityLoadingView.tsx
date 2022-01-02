import React from 'react';
import style from '../../styles/genesis.module.css'
import { EntityInfo } from '../../schemas/genesis';

const DeployEntityLoadingView = () => {
  return <div className={style.entryContainer} style={{ height: '260px' }}>
    <img className={style.blackBadge} src="/images/blackBadge.svg"/>
    <h1 className={style.successHeader}>Deploying entity</h1>
  </div>
}

export default DeployEntityLoadingView