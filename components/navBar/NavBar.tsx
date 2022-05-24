import React, { useEffect, useContext } from 'react';
import styles from "../../styles/navBar.module.css";
import SignInButton from './SignInButton';
import AccountInfo from './AccountInfo';
import cx from 'classnames';
import { Web3AuthContext } from '../../contexts/Web3AuthContext';
import { Web3ModalContextType } from '../../schemas/Web3ModalTypes';
import { useRouter } from 'next/router';

export default function NavBar({ sticky } :{ sticky: boolean }) {
  const { active, address, connect } = useContext<Web3ModalContextType>(Web3AuthContext);
  const router = useRouter()

  function goToSiwe() {
    router.push("/siwe")
  }
  
  const navBarStyles = sticky ? cx(styles.navBar, styles.sticky) : styles.navBar;
  return (
    <div className={navBarStyles}>
      <div className={styles.badgeLogo}>
        BADGE.
      </div>
      { active ? <AccountInfo account={address}/> : <SignInButton connect={goToSiwe}/> }
    </div>
  )
}