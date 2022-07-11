import React, { useEffect, useState, useRef } from 'react';
import styles from "./AccountInfo.module.scss";
import { ethers } from 'ethers';
import cx from 'classnames';
import { signOut } from 'next-auth/react';
import useOutsideAlerter from '../../utils/hooks/useOutsideAlerter';
import { CURRENT_SUBDOMAIN, DomainTypeProps } from '../../utils/serverSidePropsUtil';
import { useRouter } from 'next/router';
import useCurrentEntity from '../../utils/hooks/useCurrentEntity';
import useAccountEns from '../../utils/hooks/useAccountEns';

interface Props extends DomainTypeProps {
  account: string
}
export default function AccountInfo({ account, host, domainType } : Props) {

  // ** TRACK OUTSIDE CLICK ** \\
  const ref = useRef(null);
  useOutsideAlerter(ref, contract);
  
  // ** WALLET / ENTITY STATE ** \\
  const entity = useCurrentEntity();
  const possibleEns = useAccountEns(account);

  // ** ACCOUNT INFO STATE ** \\
  const [expanded, setExpanded] = useState(false);

  const shortenAddress = (address: string) => {
    return address.substring(0, 5) + ".." + address.substring(address.length - 3, address.length);
  }

  const shortenEns = (ens: string) => {
    if (ens.length > 14) {
      return ens.substring(0, 8) + "...[.eth]";
    }
    return ens;
  }

  const shortenEntityName = (name: string) => {
    if (name.length > 17) {
      return name.substring(0, 14) + "...";
    }
    return name;
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

  const infoContainer = expanded ? styles.accountInfoContainerExpanded : styles.accountInfoContainer
  return (
    <div className={styles.accountInfoBackground} ref={ref}>
      <div className={infoContainer}>
        <TopContentContainer 
          handle={possibleEns ? shortenEns(possibleEns) : shortenAddress(account)} 
          entityName={entity?.name ? shortenEntityName(entity?.name):"--"}
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