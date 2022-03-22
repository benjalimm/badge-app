import React, { useRef } from 'react'
import style from '../../styles/landingPage/lp.module.css';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

export default function BottomPageSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  })

  const pageSectionClasses = inView ? cx(style.secondPageSectionAnimation, style.secondPageSectionContainer) : style.secondPageSectionContainer;
  return (
    <div 
      className={pageSectionClasses} 
      ref={ref}
    >
      <h1 className={style.walletEqualsResumeText}>WALLET = NEW RESUME</h1>
      <p className={style.walletEqualsResumeParagraphText}>
        People care about signal.
        <br/><br/>
        The quality of stakeholders an entity attracts is correlated with it's ability to provide strong signal. But the best people don't brag, the bragging is done for them. This is what Badge is built to do.
      </p>
      <SignUpToBetaContainer/>
    </div>
  )
}

const SignUpToBetaContainer = () => {
  return <div className={style.signUpToBetaContainer}>
    <h1 className={style.signUpToBetaHeader}>Get started with Badge</h1>
    <p className={style.signUpToBetaSubtitleText}>Run a company, DAO or an internet organization? <br/>Join the waiting list to be one of the first users.</p>
    <button className={style.signUpToBetaButton} onClick={(e) => {
      e.preventDefault();
      window.location.href='https://forms.gle/4T1P2G95GH6VUXiv8';
    }}>Sign up</button>
  </div>
}