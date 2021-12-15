import Navbar from '../components/landingPage/NavBar'
import TopPageSection from '../components/landingPage/TopPageSection'
import styles from '../styles/landingPage/lp.module.css'


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
