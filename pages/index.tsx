import React  from 'react'
import { GetServerSideProps } from 'next'
import getServerSidePropsWildCardFunction, { DomainTypeProps } from '../utils/serverSidePropsUtil'
import LandingPage from '../components/LandingPage/LandingPage';
import AlphaBadgePage from '../components/AlphaBadgePage/AlphaBadgePage';

const IndexPage = (domainTypeProps: DomainTypeProps) => {
  const { domainType } = domainTypeProps;

  switch (domainType) {
    case "app-subdomain":
      return <AlphaBadgePage {...domainTypeProps}/>
    default:
      return <LandingPage {...domainTypeProps} />
  }
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = getServerSidePropsWildCardFunction;
