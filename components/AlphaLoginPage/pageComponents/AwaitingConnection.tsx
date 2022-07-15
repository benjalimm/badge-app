import React from 'react';
import { PulseLoader } from 'react-spinners';
import useMediaQuery from '../../../utils/hooks/useMediaQuery';
import style from './AwaitingConnection.module.scss';

export default function AwaitingConnection() {
  const isMobile = useMediaQuery('(max-width: 850px)')
  const size = isMobile ? 4 : 7;
  return <div className={style.container}>
    <PulseLoader size={size}/>
    <h1 className={style.header}>Awaiting wallet connection...</h1>
  </div>
}