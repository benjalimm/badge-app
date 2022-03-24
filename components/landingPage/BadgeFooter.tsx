import React, { useEffect, useContext } from 'react'
import style from '../../styles/landingPage/footer.module.css'
export default function BadgeFooter() {
  return <footer className={style.footer}>
    <div className={style.textContainer}>
      <h1 className={style.badgeLogo}>BADGE.</h1>
      <span className={style.subtitle}>Protocol for on-chain reputation.</span>
      <span className={style.subtitle}>©2022 Badge. All rights reserved.</span>
    </div>
  </footer>
}