import { useSession } from 'next-auth/react';
import React from 'react';
import useAlphaUser from '../../utils/hooks/useAlphaUser';
import { DomainTypeProps } from '../../utils/serverSidePropsUtil';
import AlphaLoginPage from '../AlphaLoginPage/AlphaLoginPage';
import MainNavigation from '../MainNavigation/MainNavigation';

export default function AlphaBadgePage(domainTypeProps: DomainTypeProps) {
  const alphaUser = useAlphaUser();
  const { status } = useSession();
  const active = status === "authenticated";
  const accessGranted = active  && alphaUser
  return ( accessGranted ? 
    <MainNavigation {...domainTypeProps}/> :
    <AlphaLoginPage {...domainTypeProps} 
      alphaUser={alphaUser} 
      authenticated={active}
    />
  );
}