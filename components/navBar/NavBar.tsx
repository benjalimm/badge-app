import React, { useEffect, useContext } from 'react';
import styles from "../../styles/navBar.module.css";
import SignInButton from './SignInButton';
import AccountInfo from './AccountInfo';
import cx from 'classnames';
import { Web3AuthContext } from '../../contexts/Web3AuthContext';
import { Web3ModalContextType } from '../../schemas/Web3ModalTypes';
import { useRouter } from 'next/router';
import { getCsrfToken, signIn } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import { useAccount, useConnect, useNetwork, useSignMessage } from 'wagmi'

export default function NavBar({ sticky } :{ sticky: boolean }) {
  const { active, address, connect: web3ModalConnect } = useContext<Web3ModalContextType>(Web3AuthContext);
  const router = useRouter()
  const { connect, connectors }  = useConnect();
  const { signMessageAsync, error: signError  } = useSignMessage();
  const { data: networkData, pendingChainId } = useNetwork()
  const { data: accountData } = useAccount();

  const handleLogin = async () => {
    try {
      console.log(connectors)
      await connect(connectors[0]);
      const callbackUrl = '/protected';
      const message = new SiweMessage({
        domain: window.location.host,
        address: accountData?.address,
        statement: 'Sign in with Ethereum into Badge.',
        uri: window.location.origin,
        version: '1',
        chainId: pendingChainId,
        nonce: await getCsrfToken()
      });
      const signature = await signMessageAsync({ message: message.prepareMessage() });
      signIn('credentials', { message: JSON.stringify(message), redirect: false, signature, callbackUrl });
    } catch (error) {
      console.log(error)
      console.log(pendingChainId)
      window.alert(error)
    }
  }

  function goToSiwe() {
    router.push("/siwe")
  }
  
  const navBarStyles = sticky ? cx(styles.navBar, styles.sticky) : styles.navBar;
  return (
    <div className={navBarStyles}>
      <div className={styles.badgeLogo}>
        BADGE.
      </div>
      { active ? <AccountInfo account={address}/> : <SignInButton connect={handleLogin}/> }
    </div>
  )
}