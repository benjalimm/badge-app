import { useWeb3React } from '@web3-react/core';
import React from 'react';
import styles from "../../styles/navBar.module.css";
import { injected } from '../../services/injectedConnectors'

export default function AccountInfo() {

  const shortenAddress = (address: string) => {
    return address.substring(0, 5) + ".." + address.substring(address.length - 3, address.length);
  }

  const { active, account, library, connector, activate, deactivate } 
  = useWeb3React();
  console.log(active)
  return (
    <div className={styles.accountInfoContainer}>
      <div className={styles.profileImageCircle}/>
      <span className={styles.address}>{shortenAddress(account)}</span>
    </div>
  )
}