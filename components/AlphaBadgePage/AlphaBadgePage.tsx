import { useSession } from 'next-auth/react';
import React from 'react';
import useAlphaUser from '../../utils/hooks/useAlphaUser';
import useGateKeep from '../../utils/hooks/useGateKeep';
import { DomainTypeProps } from '../../utils/serverSidePropsUtil';
import AlphaLoginPage from '../AlphaLoginPage/AlphaLoginPage';
import MainNavigation from '../MainNavigation/MainNavigation';

export default function AlphaBadgePage(domainTypeProps: DomainTypeProps) {
  const { allowed, alphaUser } = useGateKeep(domainTypeProps.domainType)
  return ( allowed ? 
    <MainNavigation {...domainTypeProps}/> :
    <AlphaLoginPage {...domainTypeProps} 
      alphaUser={alphaUser} 
    />
  );
}