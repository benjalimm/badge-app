import React from 'react';
import { PulseLoader } from 'react-spinners';
import style from './AwaitingConnection.module.scss';

export default function AwaitingConnection() {
  return <div className={style.container}>
    <PulseLoader size={10}/>
    <h1 className={style.header}>Awaiting wallet connection...</h1>
  </div>
}