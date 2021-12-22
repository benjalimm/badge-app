import Navbar from '../components/navBar/NavBar'
import React, { useEffect } from 'react'
import styles from '../styles/deployEntity.module.css'
import PageTitleView from '../components/PageTitleView'
import cx from 'classnames';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';

export default function DeployEntityPage() {
  const { active } = useWeb3React();
  const router = useRouter();
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
