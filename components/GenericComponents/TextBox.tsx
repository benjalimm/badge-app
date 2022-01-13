import React from 'react';
import style from '../../styles/GenericComponents/textBox.module.css';

export default function TextBox({ placeholder, onChange, customHeight, fontSize, value }: {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void,
  placeholder: string;
  customHeight?: string;
  fontSize?: string;
  value?: string;
}) {

  const customStyle = {
    height: customHeight,
    fontSize: fontSize,
  }
  return <div className={style.formTextFieldContainer} style={customStyle}>
    <input className={style.formTextField} type="text" placeholder={placeholder} onChange={onChange} value={value}/>
  </div>
}