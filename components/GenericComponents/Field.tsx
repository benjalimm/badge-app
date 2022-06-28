import React from 'react';
import style from './Field.module.css';
import cx from 'classnames';

export default function Field(
  { title, value, className, isLink } : 
  { title: string, value: string, className?: string, isLink?: boolean}) {

  const link = isLink === undefined ? false : isLink;
  return <div className={className}>
    <h1 className={style.fieldHeader}>{title}</h1>
    { 
      link ? 
        <a 
          className={cx(style.fieldValue, style.link)} 
          href={value}
          target="_blank" rel="noreferrer"
        >
          {value}
          
        </a>
        : 
        <span 
          className={style.fieldValue}>
          {value}
        </span>
    }
  </div>

}