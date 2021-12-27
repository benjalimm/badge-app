import React, { useEffect, useState } from 'react';
import styles from "../../styles/navBar.module.css";
import { ethers } from 'ethers';
import cookieCutter from 'cookie-cutter';

interface ENSStore { 
  [key: string]: string;
} 

export default function AccountInfo({ account } : { account: string }) {

  const [walletHandle,setWalletHandle] = useState(null);

  const provider = ethers.getDefaultProvider();

  const shortenAddress = (address: string) => {
    return address.substring(0, 5) + ".." + address.substring(address.length - 3, address.length);
  }

  const getENSFromCookies = (address: string): (string | undefined) => {
    const ensStoreString = cookieCutter.get('walletENS');
    if (ensStoreString) { 
      const ensStore = JSON.parse(ensStoreString) as ENSStore;
      if (ensStore) {
        return ensStore[address];
      }

    }
    
  }
  
  const setENSInCookies = (address: string, ens: string) => {
    const ensStoreString = cookieCutter.get('walletENS');
    console.log("ENS Store: ", ensStoreString);
    let ensStore = JSON.parse(ensStoreString) as ENSStore;

    if (!ensStore) {
      ensStore = { address: ens }
      console.log(`ensStore: ${JSON.stringify(ensStore)}`)

    } 

    ensStore[address] = ens;

    cookieCutter.set('walletENS', JSON.stringify(ensStore));
  }

  useEffect(() => {
    const ens = getENSFromCookies(account);

    if (ens) {
      setWalletHandle(ens);
    } else {
      setWalletHandle(shortenAddress(account));
    }
    
  },[])

  useEffect(() => {
    provider.lookupAddress(account).then(result => {
      setWalletHandle(result);
      setENSInCookies(account, result);
    })
  },[])
  return (
    <div className={styles.accountInfoContainer}>
      <div className={styles.profileImageCircle}/>
      <span className={styles.address}>{walletHandle}</span>
    </div>
  )
}