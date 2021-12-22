import { useWeb3React } from '@web3-react/core';
import React from 'react';
import styles from "../../styles/navBar.module.css";
import SignInButton from './SignInButton';
import AccountInfo from './AccountInfo';
export default function NavBar() {

  const { active, account, library, connector, activate, deactivate } 
  = useWeb3React();

  return (
    <div className={styles.navBar}>
      <div className={styles.badgeLogo}>
        BADGE.
      </div>
      { active ? <AccountInfo/> : <SignInButton/> }
      
    </div>
  )
}