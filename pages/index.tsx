import Navbar from '../components/navBar/NavBar'
import TopPageSection from '../components/landingPage/TopPageSection'
import BottomPageSection from '../components/landingPage/BottomPageSection'
import ExplanationPageSection from '../components/landingPage/ExplanationPageSection'
import styles from '../styles/landingPage/lp.module.css'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
<<<<<<< HEAD
import BadgeHead from '../components/landingPage/BadgeHead'
import BadgeFooter from '../components/landingPage/BadgeFooter'
import { useSession, signOut } from "next-auth/react"
import { useAccount, useConnect, useNetwork, useSignMessage } from 'wagmi'
import MeritLayerSection from '../components/landingPage/MeritLayerSection'
import { Features } from '@headlessui/react/dist/utils/render'
import FeaturesSection from '../components/landingPage/FeaturesSection'

=======
import { Web3AuthContext } from '../contexts/Web3AuthContext';
import BadgeHead from '../components/landingPage/BadgeHead'
import BadgeFooter from '../components/landingPage/BadgeFooter'
>>>>>>> main
const LandingPage = () => {
  const router = useRouter();
  const { status } = useSession();
  const active = (status === "authenticated");

  useEffect(() => {

    if (active) {
<<<<<<< HEAD
      // signOut()
      // router.push('/genesis')
=======
      router.push('/create')
>>>>>>> main
    }
    console.log(status)
  
  }, [status])

  return (
    <div className={styles.lp}>
      <BadgeHead/>
      <Navbar sticky={false}/>
      <div className={styles.sections}>
        <TopPageSection/>
<<<<<<< HEAD
        <MeritLayerSection/>
        <FeaturesSection/>
=======
        <ExplanationPageSection/>
>>>>>>> main
        <BottomPageSection/>
      </div>
      <BadgeFooter/>
    </div>
  )
}

export default LandingPage

