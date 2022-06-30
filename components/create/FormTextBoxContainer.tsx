import React from 'react';
import style from './DraftBadge.module.css'
import TextBox from '../GenericComponents/TextBox';
import TextArea from '../GenericComponents/TextArea';

export type HighlightType = "ERROR" | "SUCCESS";
export default function FormTextBoxContainer(
  { 
    type, 
    title, 
    placeholder, 
    value, 
    customTextBoxHeight, 
    highlight,
    message,
    onChange, 
    customStyle 
  }: { 
    type: "TextBox" | "TextArea"
    title: string, 
    placeholder: string,
    value: string,
    customTextBoxHeight?: string,
    highlight?: HighlightType
    message?: string
    onChange:(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    customStyle?: React.CSSProperties
  }) {

  return <div className={style.formTextBoxContainer} style={customStyle}>
    <h1 className={style.formTextBoxTitle}>{title}</h1>
    {
      (type ===  "TextBox") ? 
        <TextBox 
          onChange={onChange} 
          placeholder={placeholder} 
          customHeight={customTextBoxHeight}
          fontSize='13px'
          value={value}
          highlight={highlight}
          message={message}
        /> :
        <TextArea
          onChange={onChange} 
          placeholder={placeholder} 
          customHeight={customTextBoxHeight}
          fontSize='13px'
          value={value}
        />
    }  
  </div>
}