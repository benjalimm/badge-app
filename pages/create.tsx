import React from 'react';
import { GetServerSideProps } from 'next'
import getServerSidePropsWildCardFunction, { DomainTypeProps } from '../utils/serverSidePropsUtil'
import CreateBadgeView from '../components/create/Create';

export default function Page({ domainType }: DomainTypeProps) {
  return domainType === "app-subdomain"  ? <CreateBadgeView/> : null;
}
export const getServerSideProps: GetServerSideProps = getServerSidePropsWildCardFunction;