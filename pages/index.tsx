import Navbar from '../components/navBar/NavBar'
import TopPageSection from '../components/landingPage/TopPageSection'
import styles from '../styles/landingPage/lp.module.css'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useWeb3React } from '@web3-react/core';
const LandingPage = () => {
  const router = useRouter();
  const { active } = useWeb3React();

  useEffect(() => {

    if (active) {
      router.push('/genesis')
    }
  
  }, [active])

  return (
    <div>
      <Navbar sticky={false}/>
      <div className={styles.sections}>
        <TopPageSection/>
      </div>
    </div>
  )
}

export default LandingPage
