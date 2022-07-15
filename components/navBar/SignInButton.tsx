import React from 'react';
import { PulseLoader } from 'react-spinners';
import styles from "./NavBar.module.scss";

export default function SignInButton ({ title, connect, isLoading }: { 
  title: string, 
  isLoading?: boolean,
  connect: () => (void)
}) {
  const loading = isLoading ? isLoading : false;
  return <button className={styles.loginButton} onClick={connect}>
    <h1 className={styles.title}>
      { loading ? <PulseLoader 
        size={7} 
        color={'#ffffff'} 
      /> : title }
    </h1>
    
  </button>
}
