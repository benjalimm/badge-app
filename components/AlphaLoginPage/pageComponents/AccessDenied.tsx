import React from 'react';
import style from './AccessDenied.module.scss';

export default function AccessDenied() {
  return <div className={style.container}>
    <div className={style.textContainer}>
      <h1 className={style.header}>Wallet address not in alpha list</h1>
      <p className={style.paragraph}>We’re keeping the alpha list small so we can give everyone the best experience. If you run an organization and would love to get added to the list, click below to find out how.</p>
    </div>
    
    <button className={style.button}>
      Find out how to join
    </button>
  </div>
}