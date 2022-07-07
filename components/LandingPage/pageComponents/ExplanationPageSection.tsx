import React from 'react'
import style from './ExplanationPageSection.module.css'
import Image from 'next/image'
import cx from 'classnames';

export default function ExplanationPageSection() {
  return <div className={style.section}>
    <Explanation 
      title="Incentivize talent. Reward Badges."
      content="Attract, retain and incentivize the best talent by empowering them with merit that is verifiable and owned by them."
      inverted={false}
      image="images/landingPage/BadgeExplanationImage_2_3x.png"
      tabHeaderText="Organizations"
    />
    <Explanation 
      title="Own your leverage. Build your resumé on-chain."
      content="Let organizations do the boasting for you. Your Badges are displayed in your crypto wallet and can be ported into any decentralized app."
      inverted={true}
      image="images/landingPage/BadgeExplanationImage_1_3x.png"
      tabHeaderText="Talent"
    />
    
  </div>
}

function Explanation(
  { title, content, inverted, image, tabHeaderText}:
  { title: string, 
    content: string, 
    inverted: boolean, 
    image: string,
    tabHeaderText: string
  }) {

  const explanationClasses = !inverted ? style.explanation : cx(style.explanation, style.explanationInverted);
  const textContainerClasses = !inverted ? style.explanationTextContainer : cx(style.explanationTextContainer, style.explanationTextContainerInverted);
  return <div className={explanationClasses}>
    <img className={style.explanationImage} src={image}/>
    <div className={textContainerClasses}>
      <TabHeader text={tabHeaderText} inverted={inverted}/>
      <h1 className={style.explanationTitle}>{title}</h1>
      <p className={style.explanationContent}>{content}</p>
    </div>
  </div>
}

function TabHeader({ text, inverted }: 
{ text: string,
  inverted: boolean
}) {
  const bgColor = !inverted ? "#FFFFFF" : "#000000"
  const textColor = !inverted ? "#000000" : "#FFFFFF"
  return <div 
    className={style.tabHeader}
    style={{ 
      color: textColor, 
      backgroundColor: bgColor,
      borderColor: textColor}}>
    {text}
  </div>
}