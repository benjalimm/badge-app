import React from 'react';
import styles from "../../styles/navBar.module.css";
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../services/injectedConnectors'

const SignInButton = () => {

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
  return <button className={styles.loginButton} onClick={connect}>
        Sign in to Web3
  </button>
}

export default SignInButton;