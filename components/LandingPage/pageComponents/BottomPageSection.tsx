import React, { useRef } from 'react'
import style from './BottomPageSection.module.css';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';
import AutoPlayVideoView from '../../GenericComponents/AutoPlayVideoView';

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
    <AutoPlayVideoView  
      className={style.video}
      source={"/videos/permissionTokens/genesisToken.mp4"}
    />
    <div className={style.signUpToBetaTextContainer}>
      <h1 className={style.signUpToBetaHeader}>Mint your Genesis token</h1>
      <p className={style.signUpToBetaSubtitleText}>Run an organization? <br/>Join the waiting list to register your entity on Badge.</p>
    </div>

    <button className={style.signUpToBetaButton} onClick={(e) => {
      e.preventDefault();
      window.location.href='https://forms.gle/4T1P2G95GH6VUXiv8';
    }}>Sign up</button>
  </div>
}