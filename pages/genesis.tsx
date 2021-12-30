import Navbar from '../components/navBar/NavBar'
import React, { useEffect, useContext, useState } from 'react'
import styles from '../styles/genesis.module.css'
import PageTitleView from '../components/PageTitleView'
import cx from 'classnames';
import { useRouter } from 'next/router';
import { Web3AuthContext } from '../contexts/Web3AuthContext';
import { ethers } from 'ethers';
import BadgeV1 from '../artifacts/contracts/BadgeV1.sol/BadgeV1.json';
import GenesisToken from '../artifacts/contracts/GenesisToken.sol/GenesisToken.json';

import { badgeContractAddress, chainNetworkUrl } from '../configs/blockchainConfig';

export default function DeployEntityPage() {
  const router = useRouter();
  const { active } = useContext(Web3AuthContext);

  useEffect(() => {
    if (!active) {
      router.push('/')
    }
  } , [active])

  return (
    <div className={styles.background}>
      <Navbar sticky={true}/>
      <PageTitleView title={"Deploy a new entity by minting a Genesis token"}/>
      <div className={styles.pageContainer}>
        <DeployEntityEntryView/>
      </div>
    </div>
  )
}

const DeployEntityEntryView = () => {

  const [currentText, setCurrentText] =  useState<string>("");

  const { web3Modal } = useContext(Web3AuthContext);

  /**
   * 
   */
  async function deployEntity() {
    // const connection = await web3Modal.connect();
    const provider = new ethers.providers.JsonRpcProvider()
    const signer = provider.getSigner();
    const badgeContract = new ethers.Contract(badgeContractAddress, BadgeV1.abi, signer);
    const genesisTokenAddress = await badgeContract.genesisToken();

    console.log("Genesis token contract ", genesisTokenAddress);
    const genesisTokenContract = new ethers.Contract(genesisTokenAddress, GenesisToken.abi, signer);

    const transaction = await genesisTokenContract.mintGenToken("tokenURI", currentText, badgeContractAddress);

    await transaction.wait();
    console.log("Transaction complete");
  }

  /**
   * 
   */
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setCurrentText(event.currentTarget.value);
  }

  return <div className={styles.entryContainer}>
    <div className={cx(styles.entryContainerTopGradientSection)}>
      <div className={styles.noise}/>
    </div> 
    <div className={styles.formContainerView}>
      <h3 className={styles.formHeaderText}>Entity name</h3>
      <span className={styles.formHeaderSubtitleText}>(Don't worry, this is not permanent)</span>
      <div className={styles.formTextFieldContainer}>
        <input className={styles.formTextField} type="text" placeholder="Entity name (e.g. Uniswap)" onChange={onChange}/>
      </div>
    </div>
    <button className={styles.deployButton} onClick={deployEntity}>
        DEPLOY
    </button>
  </div>
}
