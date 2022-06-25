import React, { useState } from 'react';

import styles from './DeployEntityEntryView.module.css';
import sharedStyle from './shared.module.css';
import cx from 'classnames';

const DeployEntityEntryView = ({ deployEntity } : { deployEntity: (string) => Promise<void> }) => {
  const [currentText, setCurrentText] =  useState<string>("");
  
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setCurrentText(event.currentTarget.value);
  }

  function deploy() {
    deployEntity(currentText);
  }

  return <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.formContainerView}>
        <h3 className={styles.formHeaderText}>Entity name</h3>
      
        <div className={styles.formTextFieldContainer}>
          <input className={styles.formTextField} type="text" placeholder="Entity name (e.g. Uniswap)" onChange={onChange}/>
        </div>
      </div>
      <button className={styles.deployButton} onClick={deploy}>
        Next
      </button>
    </div>
    
  </div>
}

export default DeployEntityEntryView;