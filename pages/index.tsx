import Navbar from '../components/navBar/NavBar'

import styles from './index.module.css'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

import { GetServerSideProps } from 'next'
import getServerSidePropsWildCardFunction, { DomainTypeProps } from '../utils/serverSidePropsUtil'
import LandingPage from '../components/landingPage/LandingPage';
import AlphaBadgePage from '../components/AlphaBadgePage/AlphaBadgePage';

const IndexPage = (domainTypeProps: DomainTypeProps) => {
  const { domainType } = domainTypeProps;

  switch (domainType) {
    case "main":
      return <LandingPage {...domainTypeProps} />
    case "app-subdomain":
      return <AlphaBadgePage {...domainTypeProps}/>
    default:
      return null;
  }
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = getServerSidePropsWildCardFunction;
