import Navbar from '../components/navBar/NavBar'

import styles from './index.module.css'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

import { GetServerSideProps } from 'next'
import getServerSidePropsWildCardFunction, { DomainTypeProps } from '../utils/serverSidePropsUtil'
import LandingPage from '../components/LandingPage/LandingPage';
import MainNavigation from '../components/MainNavigation/MainNavigation';

const IndexPage = (domainTypeProps: DomainTypeProps) => {
  const { domainType } = domainTypeProps;
  
  switch (domainType) {
    case "badge":
      return <LandingPage {...domainTypeProps} />
    case "alpha":
      return <MainNavigation/>
    default:
      return null;
  }
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = getServerSidePropsWildCardFunction;
