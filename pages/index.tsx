import Link from 'next/link'
import Layout from '../components/examples/Layout'
import Navbar from '../components/landingPage/TopNavBar'
import PageSection from '../components/landingPage/PageSection'
import styles from '../styles/lp.module.css'
const IndexPage = () => (
  <div>
    <Navbar fixed={true}/>
    <PageSection/>

  </div>
)

export default IndexPage
