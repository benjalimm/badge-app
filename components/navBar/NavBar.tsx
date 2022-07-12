import React, { useEffect, useContext } from 'react';
import styles from "./NavBar.module.scss";
import SignInButton from './SignInButton';
import AccountInfo from './AccountInfo';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { getCsrfToken, signIn, signOut } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import { useAccount, useConnect, useNetwork, useSigner, useSignMessage } from 'wagmi'
import { useSession } from 'next-auth/react';
import { CURRENT_SUBDOMAIN, DomainTypeProps } from '../../utils/serverSidePropsUtil';

interface Props extends DomainTypeProps {
  sticky?: boolean;
}

export default function NavBar({ sticky, host, domainType }:Props) {
  const router = useRouter()
  const { connect }  = useConnect();
  const { signMessageAsync, error: signError } = useSignMessage();
  const { chain } = useNetwork()
  const { address, connector } = useAccount();
  const { status, data: session } = useSession();
  const { isError, isIdle, isSuccess } = useSigner();
  const active = (status === "authenticated")

  // ** SIGN IN WITH ETHEREUM ** \\
  const handleLogin = async () => {
    try {
      await connect();
      const callbackUrl = `${CURRENT_SUBDOMAIN}.${host}`;
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum into Badge.',
        uri: window.location.origin,
        version: '1',
        chainId: chain.id,
        nonce: await getCsrfToken()
      });
      const signature = await signMessageAsync({ message: message.prepareMessage() });
      await signIn('credentials', { message: JSON.stringify(message), redirect: false, signature, callbackUrl });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // const currentRoute = router.pathname;
    // console.log(`isActive: ${active}`)
    // if (!active && (currentRoute !== "/")) {
    //   signOut()
    //   router.push('/')
    // }

  }, [status])

  useEffect(() => {
    console.log(`isActive: ${active}`)
  }, [active])

  const navBarStyles = sticky ? cx(styles.navBar, styles.sticky) : styles.navBar;
  return (
    <div className={navBarStyles}>
      <div className={styles.badgeLogo}>
        BADGE.
      </div>
      { active ? 
        <AccountInfo 
          account={session.user?.name} 
          host={host} 
          domainType={domainType}/> 
        : 
        <SignInButton connect={handleLogin}/> }
      
    </div>
  )
}