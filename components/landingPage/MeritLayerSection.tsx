import React from 'react';
import styles from "./MeritLayerSection.module.css"
import cx from 'classnames';

export default function MeritLayerSection() {
  return <div className={styles.container}>
    <h1 className={styles.header}>LinkedIn is dead. <span className={styles.cancelledHeader}>Long live LinkedIn.</span></h1>
    <h3 className={styles.text}>Your achievements shouldn’t be siloed into a single app, they should be accessible wherever you go in the decentralized web. We are making it possible for every organization to support this, starting with <br/>
      <span className={styles.explanation}>a tool to incentivize and reward talent with on-chain merit.</span></h3>
  </div>
}