import React from 'react'
import style from '../../styles/lp.module.css';
import cx from 'classnames';

export default function SecondPageSection() {
  return (
    <div className={cx(style.lpPageSection, style.yellowRedGradient)}>

      <div className={style.topPageSectionContainer}>
        
        <div>
          <h1 className={cx(style.badgeHeaderText, style.blackText)}>
          Don't make your team toot their own horn.
          </h1>
          <h3 className={cx(style.badgeNormalText, style.blackText)}>
            People feel awkward bragging about their achievements, it's bad signal.
          </h3>
          <h3 className={cx(style.badgeNormalText, style.blackText)}>
            Let the blockchain do the bragging for them.
          </h3>

        </div>
        
      </div>

    </div>
  )
}