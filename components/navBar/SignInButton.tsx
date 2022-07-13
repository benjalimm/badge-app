import React from 'react';
import styles from "./NavBar.module.scss";

const SignInButton = ({ title, connect }: { title: string, connect: () => (void)}) => {
  return <button className={styles.loginButton} onClick={connect}>
    { title }
  </button>
}

export default SignInButton;