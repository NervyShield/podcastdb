import React from 'react';
import { Filtros } from './Filtos/Filtros';
import { Table } from './Table/Table';
import styles from './Home.module.css';
import { Context } from '../Context';
import { ReactComponent as Svg } from '../Assets/turn-mobile.svg';
import { AdsHorizontal } from './Ads/AdsHorizontal';
import { AdsVertical } from './Ads/AdsVertical';
import { TableNav } from './TableNav/TableNav';

export const Home = () => {
  const { isMobile } = React.useContext(Context);

  return (
    <div className={styles.geral}>
      <div className={styles.ads}></div>
      {console.log(window.location.href)}
      <div className={styles.wrapper}>
        <div className={styles.frameCentral}>
          <Filtros />

          <span className={styles.icon}>
            <Svg className={styles.Svg} />
          </span>
          <TableNav />
          <Table />
        </div>
      </div>
      <div className={styles.ads}>
        <AdsHorizontal />
      </div>
    </div>
  );
};
