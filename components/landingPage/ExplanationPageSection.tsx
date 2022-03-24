import React from 'react'
import lpStyle from '../../styles/landingPage/lp.module.css'
import style from '../../styles/landingPage/explanationPageSection.module.css'
import Image from 'next/image'
import cx from 'classnames';

export default function ExplanationPageSection() {
  return <div className={style.section}>
    <Explanation 
      title="Transform into a web3 organization."
      content="Deploy an entity to represent your organization on-chain with one click. Give others permission to award Badges on behalf of the entity."
      inverted={false}
      image="images/landingPage/BadgeExplanationImage_1_3x.png"
    />

    <Explanation 
      title="Incentivize and reward talent with Badges."
      content="Attract, retain and incentivize the best talent by empowering them with merit that is verifiable and owned by them."
      inverted={true}
      image="images/landingPage/BadgeExplanationImage_2_3x.png"
    />
  </div>
}

function Explanation(
  { title, content, inverted, image}:
  { title: string, 
    content: string, 
    inverted: boolean, 
    image: string 
  }) {

  const explanationClasses = !inverted ? style.explanation : cx(style.explanation, style.explanationInverted);
  const textContainerClasses = !inverted ? style.explanationTextContainer : cx(style.explanationTextContainer, style.explanationTextContainerInverted);
  return <div className={explanationClasses}>
    <img className={style.explanationImage} src={image}/>
    <div className={textContainerClasses}>
      <h1 className={style.explanationTitle}>{title}</h1>
      <p className={style.explanationContent}>{content}</p>
    </div>
    
  </div>
}