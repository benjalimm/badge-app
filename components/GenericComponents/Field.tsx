import React from 'react';
import style from '../../styles/GenericComponents/field.module.css';

export default function Field(
  { title, value, className } : 
  { title: string, value: string, className?: string}) {
  return <div className={className}>
    <h1 className={style.fieldHeader}>{title}</h1>
    <span className={style.fieldValue}>{value}</span>
  </div>

}