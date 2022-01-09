import React from 'react';
import style from '../../styles/create/draftBadge.module.css'
import TextBox from '../GenericComponents/TextBox';
import TextArea from '../GenericComponents/TextArea';

export default function FormTextBoxContainer({ type, title, placeholder, customTextBoxHeight, onChange }: { 
  type: "TextBox" | "TextArea"
  title: string, 
  placeholder: string,
  customTextBoxHeight?: string 
  onChange:(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) {

  return <div className={style.formTextBoxContainer}>
    <h1 className={style.formTextBoxTitle}>{title}</h1>
    {
      (type ===  "TextBox") ? 
        <TextBox 
          onChange={onChange} 
          placeholder={placeholder} 
          customHeight={customTextBoxHeight}
          fontSize='13px'
        /> :
        <TextArea
          onChange={onChange} 
          placeholder={placeholder} 
          customHeight={customTextBoxHeight}
          fontSize='13px'
        />
    }  
  </div>
}