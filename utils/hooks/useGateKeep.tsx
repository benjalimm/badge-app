import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { AlphaUser } from '../../backend/AirtableController';
import { DomainType } from '../serverSidePropsUtil';
import useAlphaUser from './useAlphaUser';

export default function useGateKeep(domainType: DomainType): 
{ allowed: boolean, alphaUser: AlphaUser | null, loading: boolean } {
  const alphaUser = useAlphaUser();
  const { status } = useSession();
  let allowed: boolean;
   
  switch (domainType) {
    case "app-subdomain":
      allowed = status === "authenticated" && (alphaUser !== null);
      break;
    default:
      allowed = true;
      break;
  }

  return { allowed, alphaUser, loading: (status === "loading")}
}