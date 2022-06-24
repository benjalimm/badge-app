import React, { useEffect, useState } from 'react';
import styles from "./NavBar.module.css";
import { ethers } from 'ethers';
export default function AccountInfo({ account } : { account: string }) {

  const [walletHandle,setWalletHandle] = useState(null);

  const provider = ethers.getDefaultProvider();

  const shortenAddress = (address: string) => {
    return address.substring(0, 5) + ".." + address.substring(address.length - 3, address.length);
  }

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