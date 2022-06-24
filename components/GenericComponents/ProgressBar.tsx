import React from 'react';
import style from './ProgressBar.module.css';
import cx from 'classnames';
const ProgressBar = ({ 
  valuePercentage,
  customFillerStyle,
  customBarContainerStyle
}: { 
  valuePercentage: number,
  customFillerStyle?: string
  customBarContainerStyle?: string
}) => {

  return (
    <div className={style.wrapper}>
      <div className={cx(style.barContainer, customBarContainerStyle)}>
        <div className={cx(style.filler, customFillerStyle)} 
          style={{ width: `${valuePercentage}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;