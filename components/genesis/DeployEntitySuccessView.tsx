import React, { useState } from 'react';
import { ethers } from 'ethers';
import BadgeV1 from '../../artifacts/contracts/BadgeV1.sol/BadgeV1.json';
import GenesisToken from '../../artifacts/contracts/GenesisToken.sol/GenesisToken.json';
import { badgeContractAddress } from '../../configs/blockchainConfig';
import style from '../../styles/genesis.module.css'
import cx from 'classnames';

const DeployEntitySuccessView = () => {

  return <div className={style.entryContainer} style={{ height: '580px' }}>
    <h1>Entity successfully deployed on-chain</h1>
  </div>
}

export default DeployEntitySuccessView;