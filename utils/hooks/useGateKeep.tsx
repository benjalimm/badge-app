import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { AlphaUser } from '../../backend/controllers/AirtableController';
import { DomainType } from '../serverSidePropsUtil';
import useAlphaUser from './useAlphaUser';

export default function useGateKeep(domainType: DomainType): 
{ allowed: boolean, alphaUser: AlphaUser | null, loading: boolean } {
  const alphaUser = useAlphaUser();
  const { status } = useSession();
  let allowed: boolean;

  useEffect(() => {
    console.log(`SessionStatus: ${status}`)
  },[status])
   
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