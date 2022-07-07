import React from 'react'
import { GetServerSideProps } from 'next'
import getServerSidePropsWildCardFunction, { DomainTypeProps } from '../utils/serverSidePropsUtil'
import RegisterEntityPage from '../components/genesis/Genesis';

export default function Page({ domainType }: DomainTypeProps) {
  return domainType === "alpha" ? <RegisterEntityPage/> : null;
}

export const getServerSideProps: GetServerSideProps = getServerSidePropsWildCardFunction;