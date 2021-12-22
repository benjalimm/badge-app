import Navbar from '../components/navBar/NavBar'
import TopPageSection from '../components/landingPage/TopPageSection'
import styles from '../styles/landingPage/lp.module.css'
import React from 'react'
const LandingPage = () => {

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
