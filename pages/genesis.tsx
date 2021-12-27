import Navbar from '../components/navBar/NavBar'
import React, { useEffect, useContext } from 'react'
import styles from '../styles/genesis.module.css'
import PageTitleView from '../components/PageTitleView'
import cx from 'classnames';
import { useRouter } from 'next/router';
import { Web3AuthContext } from '../contexts/Web3AuthContext';

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
  return <div className={styles.entryContainer}>
    <div className={cx(styles.entryContainerTopGradientSection)}>
      <div className={styles.noise}/>
    </div> 
    <div className={styles.formContainerView}>
      <h3 className={styles.formHeaderText}>Entity name</h3>
      <span className={styles.formHeaderSubtitleText}>(Don't worry, this is not permanent)</span>
      <div className={styles.formTextFieldContainer}>
        <input className={styles.formTextField} type="text" placeholder="Entity name (e.g. Uniswap)"/>
      </div>
    </div>
    <button className={styles.deployButton}>
        DEPLOY
    </button>
  </div>
}
