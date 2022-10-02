import React from 'react';
import { Filtros } from './Filtos/Filtros';
import { Table } from './Table/Table';
import styles from './Home.module.css';
import { Ads } from './Ads';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.frameLeft}>
        <Ads />
      </div>
      <div className={styles.frameCentral}>
        <div className={styles.adsTopo}>Adstop</div>
        <Filtros />
        <Table />
      </div>
      <div className={styles.frameRight}>
        <Ads />
      </div>
    </div>
  );
};
