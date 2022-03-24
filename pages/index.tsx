import Navbar from '../components/navBar/NavBar'
import TopPageSection from '../components/landingPage/TopPageSection'
import BottomPageSection from '../components/landingPage/BottomPageSection'
import ExplanationPageSection from '../components/landingPage/ExplanationPageSection'
import styles from '../styles/landingPage/lp.module.css'
import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router';
import { Web3AuthContext } from '../contexts/Web3AuthContext';
import BadgeHead from '../components/landingPage/BadgeHead'
import BadgeFooter from '../components/landingPage/BadgeFooter'
const LandingPage = () => {
  const router = useRouter();
  const { active } = useContext(Web3AuthContext);

  useEffect(() => {

    if (active) {
      router.push('/genesis')
    }
  
  }, [active])

  return (
    <div className={styles.lp}>
      <BadgeHead/>
      <Navbar sticky={false}/>
      <div className={styles.sections}>
        <TopPageSection/>
        <ExplanationPageSection/>
        <BottomPageSection/>
      </div>
      <BadgeFooter/>
    </div>
  )
}

export default LandingPage
