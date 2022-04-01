import React from 'react';
import style from '../../styles/GenericComponents/field.module.css';

export default function Field(
  { title, value, className, isLink } : 
  { title: string, value: string, className?: string, isLink?: boolean}) {

  const link = isLink === undefined ? false : isLink;
  return <div className={className}>
    <h1 className={style.fieldHeader}>{title}</h1>
    { 
      link ? 
        <a 
          className={style.fieldValue} 
          style={{ textDecoration: 'underline'}} 
          href={value}>{value}</a> : 
        <span 
          className={style.fieldValue}>
          {value}
        </span>
    }
  </div>

}