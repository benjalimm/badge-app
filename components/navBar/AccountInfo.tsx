import React, { useEffect, useState } from 'react';
import styles from "./AccountInfo.module.scss";
import { ethers } from 'ethers';
import cx from 'classnames';
import { signOut } from 'next-auth/react';

export default function AccountInfo({ account, host } : { account: string, host: string }) {

  const [walletHandle,setWalletHandle] = useState(null);
  const [expanded, setExpanded] = useState(false);

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

  useEffect(() => {
    console.log(expanded)
  }, [expanded])

  const infoContainer = expanded ? styles.accountInfoContainerExpanded : styles.accountInfoContainer
  return (
    <div className={styles.accountInfoBackground}>
      <div className={infoContainer}>
        <TopContentContainer 
          handle={walletHandle} 
          entityName={"Badge Labs"}
          expanded={expanded}
          onClick={ () => setExpanded(!expanded)}
        />
        {
          expanded ? <ButtonsContentContainer host={host} /> : null
        }
      
      </div>
        
    </div>
    
  )
}

// ** ** \\
function TopContentContainer(
  { handle, entityName, onClick, expanded } 
  : 
  { handle: string, entityName: string, onClick: () => void, expanded: boolean}) {
  return <div className={styles.topContentContainer} onClick={onClick}>
    <div className={styles.profileImageCircle} />
    <div className={styles.accountInfoTextContainer}>
      <span className={styles.address}>{handle}</span>
      <span className={styles.entity}>{entityName}</span>
    </div>
    <div className={styles.circle}>
      <img src={"images/generic/ArrowDropdown.svg"}/>
    </div>
  </div>
}

// ** ** \\
function ButtonsContentContainer({ host } : { host: string }) {

  function goToApp() {
    window.location.assign(`http://alpha.${host}`)
  }

  return <div className={styles.buttonsContentContainer}>
    <button className={styles.goToAppButton} onClick={goToApp}>
        Go to app
    </button>

    <button className={styles.disconnectButton} onClick={() => signOut()}>
        Disconnect
    </button>
    <div>

    </div>
    
  </div>
}