import React from 'react';
import styles from "../../styles/navBar.module.css";

const SignInButton = ({ connect }: { connect: () => (void)}) => {
  return <button className={styles.loginButton} onClick={connect}>
        Sign in to Web3
  </button>
}

export default SignInButton;