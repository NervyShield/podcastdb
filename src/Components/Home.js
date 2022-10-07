import React from 'react';
import { Filtros } from './Filtos/Filtros';
import { Table } from './Table/Table';
import styles from './Home.module.css';
import { Ads } from './Ads';
import { Context } from '../Context';
import { ReactComponent as Svg } from '../Assets/turn-mobile.svg';

export const Home = () => {
  const { isMobile } = React.useContext(Context);

  return (
    <container>
      <div className={styles.wrapper}>
        <div className={styles.frameLeft}></div>
        <div className={styles.frameCentral}>
          <Filtros />
          <div className={styles.icon}>
            <Svg className={styles.Svg} />
          </div>
          <Table />
        </div>
        <div className={styles.frameRight}></div>
      </div>
    </container>
  );
};
