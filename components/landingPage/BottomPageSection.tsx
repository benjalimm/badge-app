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
      <SignUpToBetaContainer/>
    </div>
  )
}

const SignUpToBetaContainer = () => {
  return <div className={style.signUpToBetaContainer}>
    <div className={style.signUpToBetaTextContainer}>
      <h1 className={style.signUpToBetaHeader}>Let's get started.</h1>
      <p className={style.signUpToBetaSubtitleText}>Run a company, DAO or any sort of organization? <br/>Join the waiting list to be one of the first users.</p>
    </div>

    <button className={style.signUpToBetaButton} onClick={(e) => {
      e.preventDefault();
      window.location.href='https://forms.gle/4T1P2G95GH6VUXiv8';
    }}>Sign up</button>
  </div>
}