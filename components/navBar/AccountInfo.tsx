import React, { useEffect, useState, useRef } from 'react';
import styles from "./AccountInfo.module.scss";
import { ethers } from 'ethers';
import cx from 'classnames';
import { signOut } from 'next-auth/react';
import useOutsideAlerter from '../../utils/hooks/useOutsideAlerter';
import { CURRENT_SUBDOMAIN, DomainTypeProps } from '../../utils/serverSidePropsUtil';
import { useRouter } from 'next/router';
import useCurrentEntity from '../../utils/hooks/useCurrentEntity';

interface Props extends DomainTypeProps {
  account: string
}
export default function AccountInfo({ account, host, domainType } : Props) {

  // ** TRACK OUTSIDE CLICK ** \\
  const ref = useRef(null);
  useOutsideAlerter(ref, contract);
  
  // ** WALLET / ENTITY STATE ** \\
  const [walletHandle,setWalletHandle] = useState(null);
  const entity = useCurrentEntity();

  // ** ACCOUNT INFO STATE ** \\
  const [expanded, setExpanded] = useState(false);

  const provider = ethers.getDefaultProvider();

  const shortenAddress = (address: string) => {
    return address.substring(0, 5) + ".." + address.substring(address.length - 3, address.length);
  }

  function contract() {
    setExpanded(false)
  }

  function toggle() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    window.addEventListener('scroll', contract)
    return () => {
      window.removeEventListener('scroll', contract)
    }
  },[])

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
    <div className={styles.accountInfoBackground} ref={ref}>
      <div className={infoContainer}>
        <TopContentContainer 
          handle={walletHandle} 
          entityName={entity?.name ?? "--"}
          expanded={expanded}
          onClick={toggle}
        />
        {
          expanded ? <ButtonsContentContainer 
            host={host} 
            domainType={domainType}
            onExecute={contract}
          /> : null
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
    <div className={styles.circle} onClick={onClick}>
      <img src={"images/generic/ArrowDropdown.svg"}/>
    </div>
  </div>
}

// ** ** \\
interface ButtonContentsProps extends DomainTypeProps {
  onExecute: () => void
}
function ButtonsContentContainer(
  { 
    host, 
    domainType,
    onExecute 
  }:ButtonContentsProps) {

  const router = useRouter()

  function onTap(execute: () => void) {
    onExecute();
    setTimeout(() => {
      execute();
    }, 500)
  }

  function goToApp() {
    onTap(() => {
      console.log(host)
      if (domainType === "app-subdomain") {
        // We're already in the desired subdomain -> Push to main page
        router.push('/')
      } else {
        console.log(`${CURRENT_SUBDOMAIN}.${host}`)
        window.location.assign(`http://${CURRENT_SUBDOMAIN}.${host}`)
      }  
    })
    
  }

  function disconnect() {
    onTap(() => {
      signOut()
    })
  }

  return <div className={styles.buttonsContentContainer}>
    <button className={styles.goToAppButton} onClick={goToApp}>
        Go to navigation
    </button>

    <button className={styles.disconnectButton} onClick={disconnect}>
        Disconnect
    </button>
    <div>

    </div>
    
  </div>
}