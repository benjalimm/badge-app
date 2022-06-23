import React, { useState } from 'react';

import styles from '../../pages/genesis.module.css';
import cx from 'classnames';

const DeployEntityEntryView = ({ deployEntity } : { deployEntity: (string) => Promise<void> }) => {
  const [currentText, setCurrentText] =  useState<string>("");
  
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setCurrentText(event.currentTarget.value);
  }

  function deploy() {
    deployEntity(currentText);
  }

  return <div className={styles.entryContainer}>
    <div className={cx(styles.entryContainerTopGradientSection)}>
      <div className={styles.noise}/>
    </div> 
    <div className={styles.formContainerView}>
      <h3 className={styles.formHeaderText}>Entity name</h3>
      <span className={styles.formHeaderSubtitleText}>(Don't worry, this is not permanent)</span>
      <div className={styles.formTextFieldContainer}>
        <input className={styles.formTextField} type="text" placeholder="Entity name (e.g. Uniswap)" onChange={onChange}/>
      </div>
    </div>
    <button className={styles.deployButton} onClick={deploy}>
        DEPLOY
    </button>
  </div>
}

export default DeployEntityEntryView;