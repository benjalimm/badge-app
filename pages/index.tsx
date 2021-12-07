import Link from 'next/link'
import Layout from '../components/examples/Layout'
import Navbar from '../components/landingPage/NavBar'
import SecondPageSection from '../components/landingPage/SecondPageSection'
import ThirdPageSection from '../components/landingPage/ThirdPageSection'
import TopPageSection from '../components/landingPage/TopPageSection'
import styles from '../styles/lp.module.css'
const LandingPage = () => (
  <div>
    <Navbar/>
    <div className={styles.sections}>
      <TopPageSection/>
    </div>
  </div>
)

export default LandingPage
