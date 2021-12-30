import Navbar from '../components/navBar/NavBar'
import React, { useEffect, useContext, useState } from 'react'
import styles from '../styles/genesis.module.css'
import PageTitleView from '../components/PageTitleView'
import { useRouter } from 'next/router';
import { Web3AuthContext } from '../contexts/Web3AuthContext';
import DeployEntityEntryView from '../components/genesis/DeployEntityEntryView';

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

