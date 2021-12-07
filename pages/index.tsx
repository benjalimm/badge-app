import Navbar from '../components/landingPage/NavBar'
import TopPageSection from '../components/landingPage/TopPageSection'
import styles from '../styles/lp.module.css'
import { useEffect, useState } from 'react';
import { BadgeData } from '../interfaces/BadgeData';

const LandingPage = () => {
  const [cardData, setCardData] = useState<BadgeData[]>([]);


  useEffect(() => {

  }, [])


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
