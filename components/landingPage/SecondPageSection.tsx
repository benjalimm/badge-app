import React from 'react'
import style from '../../styles/landingPage/lp.module.css';
import cx from 'classnames';

export default function SecondPageSection() {
  return (
    <div className={style.secondPageSectionContainer}>
      <h1 className={style.walletEqualsResumeText}>WALLET = NEW RESUME</h1>
      <p className={style.walletEqualsResumeParagraphText}>
        People care about signal.
        <br/><br/>
        The quality of stakeholders an organization attracts is directly correlated with it's ability to provide strong signal. The best people want to own their own signal.
      </p>
      <SignUpToBetaContainer/>
      <div style={{ height: '300px'}}/>
    </div>
  )
}

const SignUpToBetaContainer = () => {
  return <div className={style.signUpToBetaContainer}>
    <h1 className={style.signUpToBetaHeader}>Get started with Badge</h1>
    <p className={style.signUpToBetaSubtitleText}>Join the waiting list to start awarding people with Badges.</p>
    <button className={style.signUpToBetaButton}>Sign up</button>
  </div>
}