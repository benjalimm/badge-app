import React from 'react';
import styles from "./NavBar.module.scss";

const SignInButton = ({ connect }: { connect: () => (void)}) => {
  return <button className={styles.loginButton} onClick={connect}>
        Sign in with Ethereum
  </button>
}

export default SignInButton;