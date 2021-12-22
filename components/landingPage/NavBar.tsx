import { useWeb3React } from '@web3-react/core';
import React from 'react';
import styles from "../../styles/landingPage/lp.module.css";
import { injected } from '../../services/injectedConnectors'

export default function NavBar() {

  const { active, account, library, connector, activate, deactivate } 
  = useWeb3React();

  async function connect() {

    if (active) {
      console.log(account)
    }

    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.badgeLogo}>
        BADGE.
      </div>
      <button className={styles.loginButton} onClick={connect}>
        Sign in to Web3
      </button>
    </div>
  )
}