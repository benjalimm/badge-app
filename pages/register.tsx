import React from 'react'
import { GetServerSideProps } from 'next'
import getServerSidePropsWildCardFunction, { DomainTypeProps } from '../utils/serverSidePropsUtil'
import RegisterEntityPage from '../components/Genesis/Genesis';

export default function Page(domainTypeProps: DomainTypeProps) {
  const { domainType } = domainTypeProps;
  return domainType === "app-subdomain" ? 
    <RegisterEntityPage 
      {...domainTypeProps}/> : null;
}

export const getServerSideProps: GetServerSideProps = getServerSidePropsWildCardFunction;