import React from 'react';
import styles from './PageTitleView.module.css';
export default function PageTitleView({ title }: { title: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}