import { useWeb3React } from '@web3-react/core'
import Navbar from '../components/landingPage/NavBar'
import TopPageSection from '../components/landingPage/TopPageSection'
import { injected } from '../services/injectedConnectors'
import styles from '../styles/landingPage/lp.module.css'
import React from 'react'
const LandingPage = () => {

  const { active, account, library, connector, activate, deactivate } 
  = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Navbar/>
      <div className={styles.sections}>
        <TopPageSection/>
      </div>
    </div>
  )
}

export default LandingPage
