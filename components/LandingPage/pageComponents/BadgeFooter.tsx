import React, { useEffect, useContext } from 'react'
import style from './BadgeFooter.module.css'
export default function BadgeFooter() {
  return <footer className={style.footer}>
    <div className={style.textContainer}>
      <h1 className={style.badgeLogo}>BADGE.</h1>
      <span className={style.subtitle}>Protocol for on-chain merit.</span>
      <span className={style.subtitle}>©2022 Badge Labs Inc. All rights reserved.</span>
    </div>
  </footer>
}