import React from 'react';
import { GetServerSideProps } from 'next'
import getServerSidePropsWildCardFunction, { DomainTypeProps } from '../utils/serverSidePropsUtil'
import CreateBadgeView from '../components/Create/Create';

export default function Page(domainTypeProps: DomainTypeProps) {
  const { domainType } = domainTypeProps;
  return domainType === "app-subdomain"  ? <CreateBadgeView {...domainTypeProps}/> : null;
}
export const getServerSideProps: GetServerSideProps = getServerSidePropsWildCardFunction;