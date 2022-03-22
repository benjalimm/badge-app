import React from 'react'
import lpStyle from '../../styles/landingPage/lp.module.css'
import style from '../../styles/landingPage/explanationPageSection.module.css'
import Image from 'next/image'
export default function ExplanationPageSection() {
  return <div className={style.section}>
    <Explanation 
      title="Provide on-chain merit for your organization."
      content="Deploy an entity on-chain and start awarding Badges. Additionally, give others permission to award Badges on behalf of the entity."
      inverted={false}
      image=""
    />

    <Explanation 
      title="Incentivize talent by empowering them."
      content="Attract, retain and incentivize the best talent by empowering them with reputation that is verifiable and owned by them."
      inverted={true}
      image=""
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
  return <div className={style.explanation} 
    style={{ flexDirection: inverted ? "rowReverse" : "row" }}>
    <img className={style.explanationImage}/>
    <div className={style.explanationTextContainer}>
      <h1 className={style.explanationTitle}>{title}</h1>
      <p className={style.explanationContent}>{content}</p>
    </div>
    
  </div>
}