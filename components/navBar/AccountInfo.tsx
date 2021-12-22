import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
import styles from "../../styles/navBar.module.css";
import { injected } from '../../services/injectedConnectors'
import { ethers } from 'ethers';
export default function AccountInfo() {

  const [walletHandle,setWalletHandle] = useState(null);

  const provider = ethers.getDefaultProvider();

  const shortenAddress = (address: string) => {
    return address.substring(0, 5) + ".." + address.substring(address.length - 3, address.length);
  }

  const { active, account, library, connector, activate, deactivate } 
  = useWeb3React();
  console.log(active)

  useEffect(() => {
    setWalletHandle(shortenAddress(account));
  },[])

  useEffect(() => {
    provider.lookupAddress(account).then(result => {
      setWalletHandle(result);
    })
  },[])
  return (
    <div className={styles.accountInfoContainer}>
      <div className={styles.profileImageCircle}/>
      <span className={styles.address}>{walletHandle}</span>
    </div>
  )
}