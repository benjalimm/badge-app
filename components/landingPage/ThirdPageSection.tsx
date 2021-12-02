import React from 'react'
import style from '../../styles/lp.module.css';
import cx from 'classnames';

export default function ThirdPageSection() {
  return (
    <div className={cx(style.lpPageSection, style.pinkOrangeGradient)}>

      <div className={style.topPageSectionContainer}>
        
        <div>
          <h1 className={cx(style.badgeHeaderText, style.yellowText)}>
          No more plastic trophies.
          </h1>
          <h3 className={cx(style.badgeNormalText, style.yellowText)}>
            People can say whatever they want on LinkedIn. Give an award that can actually be verified.
          </h3>

        </div>
        
      </div>

    </div>
  )
}