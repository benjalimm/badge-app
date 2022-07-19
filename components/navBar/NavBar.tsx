import React, { useState, useEffect } from 'react';
import styles from "./NavBar.module.scss";
import SignInButton from './SignInButton';
import AccountInfo from './AccountInfo';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { CURRENT_SUBDOMAIN, DomainTypeProps } from '../../utils/serverSidePropsUtil';
import useSiwe from '../../utils/hooks/useSiwe';
import { useAccount, useSigner } from 'wagmi';

interface Props extends DomainTypeProps {
  sticky?: boolean;
  connectButtonAction: "REDIRECT_TO_ALPHA" | "CONNECT_WALLET"
}

export default function NavBar({ sticky, host, domainType, connectButtonAction }:Props) {
  const router = useRouter()
  const { status, data: session } = useSession();
  const active = (status === "authenticated")
  const { login, loading } = useSiwe();
  const [redirecting, setRedirecting] = useState(false);
  const { data: accountData } = useAccount()

  useEffect(() => {
    if (status === "authenticated" && accountData === null) {
      // This means that the user is signed in but the signer has expired. Need to relogin.
      console.log("Signing out")
      login().catch(err => {
        console.error(err);
      })
    }

  }, [status, accountData])

  const redirectToAlphaPage = () => {
    setRedirecting(true);
    setTimeout(() => {
      if (domainType === "app-subdomain") {
      // We're already in the desired subdomain -> Push to main page
        router.push('/')
      } else {
        console.log(`${CURRENT_SUBDOMAIN}.${host}`)
        window.location.assign(`http://${CURRENT_SUBDOMAIN}.${host}`)
      }
    }, 1000)  
  }

  async function signInWithEthereum() {
    try {
      await login();
    } catch (error) {
      console.error(error)
    }
    
  }

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
        <SignInButton 
          isLoading={connectButtonAction === "REDIRECT_TO_ALPHA" ? redirecting : loading}
          title= {connectButtonAction === "REDIRECT_TO_ALPHA" ? "Launch Alpha" : "Sign in with Ethereum"}
          
          connect={
            connectButtonAction == "CONNECT_WALLET" ?  
              signInWithEthereum : 
              redirectToAlphaPage
          }/> }
      
    </div>
  )
}