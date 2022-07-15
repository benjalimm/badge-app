import React from 'react';
import { PulseLoader } from 'react-spinners';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
import styles from "./NavBar.module.scss";

export default function SignInButton ({ title, connect, isLoading }: { 
  title: string, 
  isLoading?: boolean,
  connect: () => (void)
}) {
  const loading = isLoading ? isLoading : false;
  const isMobile = useMediaQuery('(max-width: 850px)')
  const size = isMobile ? 4 : 7;
  return <button className={styles.loginButton} onClick={connect}>
    <h1 className={styles.title}>
      { loading ? <PulseLoader 
        size={size} 
        color={'#ffffff'} 
      /> : title }
    </h1>
    
  </button>
}
