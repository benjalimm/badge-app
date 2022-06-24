import React from 'react';
import styles from "./NavBar.module.css";

const SignInButton = ({ connect }: { connect: () => (void)}) => {
  return <button className={styles.loginButton} onClick={connect}>
        Sign in with Ethereum
  </button>
}

export default SignInButton;