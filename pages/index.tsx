import Navbar from '../components/navBar/NavBar'
import TopPageSection from '../components/landingPage/TopPageSection'
import SecondPageSection from '../components/landingPage/SecondPageSection'
import styles from '../styles/landingPage/lp.module.css'
import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router';
import { Web3AuthContext } from '../contexts/Web3AuthContext';

const LandingPage = () => {
  const router = useRouter();
  const { active } = useContext(Web3AuthContext);

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
        <SecondPageSection/>
      </div>
    </div>
  )
}

export default LandingPage
