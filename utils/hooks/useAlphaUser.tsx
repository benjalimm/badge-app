import React, { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { AlphaUser } from '../../backend/controllers/AirtableController';
import AlphaUserManager from '../AlphaUserManager';

export default function useAlphaUser(): AlphaUser | null {
  const [alphaUser, setAlphaUser] = React.useState<AlphaUser | null>(null);
  const { address } = useAccount();

  useEffect(() => {
    // Initialize the alpha user
    setAlphaUser(AlphaUserManager.user);
  }, [AlphaUserManager.user])

  useEffect(() => {

    if (address) {
      AlphaUserManager.getAlphaUser(address).then(user => {
        console.log(user);
        setAlphaUser(user)
      }).catch(err => {
        console.log(`Error getting useAlphaUser: ${err}`)
      })
    }

  }, [address])

  return alphaUser
}