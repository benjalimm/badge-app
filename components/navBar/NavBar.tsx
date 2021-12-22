import { useWeb3React } from '@web3-react/core';
import React from 'react';
import styles from "../../styles/navBar.module.css";
import SignInButton from './SignInButton';
import AccountInfo from './AccountInfo';
import cx from 'classnames';
export default function NavBar({ sticky } :{ sticky: boolean }) {

  const { active } = useWeb3React();
  const navBarStyles = sticky ? cx(styles.navBar, styles.sticky) : styles.navBar;
  return (
    <div className={navBarStyles}>
      <div className={styles.badgeLogo}>
        BADGE.
      </div>
      { active ? <AccountInfo/> : <SignInButton/> }
    </div>
  )
}