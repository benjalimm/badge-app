import Navbar from '../NavBar/NavBar'
import TopPageSection from './pageComponents/TopPageSection'
import BottomPageSection from './pageComponents/BottomPageSection'

import styles from './LandingPage.module.css'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import BadgeHead from './pageComponents/BadgeHead'
import BadgeFooter from './pageComponents/BadgeFooter'
import { useSession, signOut } from "next-auth/react"
import MeritLayerSection from './pageComponents/MeritLayerSection'
import FeaturesSection from './pageComponents/FeaturesSection'
import  { DomainTypeProps } from '../../utils/serverSidePropsUtil'

const LandingPage = ({ host }: DomainTypeProps) => {
  const router = useRouter();
  const { status } = useSession();
  const active = (status === "authenticated");

  useEffect(() => {

    if (active) {
      // signOut()
      // window.location.assign(`http://alpha.${host}`)
    }
    console.log(status)
  
  }, [status])

  return (
    <div className={styles.lp}>
      <BadgeHead/>
      <Navbar sticky={false} host={host}/>
      <div className={styles.sections}>
        <TopPageSection/>
        <MeritLayerSection/>
        <FeaturesSection/>
        <BottomPageSection/>
      </div>
      <BadgeFooter/>
    </div>
  )
}

export default LandingPage
