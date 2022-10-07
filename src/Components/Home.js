import React from 'react';
import { Filtros } from './Filtos/Filtros';
import { Table } from './Table/Table';
import styles from './Home.module.css';
import { Context } from '../Context';
import { ReactComponent as Svg } from '../Assets/turn-mobile.svg';
import { AdsHorizontal } from './Ads/AdsHorizontal';
import { AdsVertical } from './Ads/AdsVertical';

export const Home = () => {
  const { isMobile } = React.useContext(Context);

  return (
    <container className={styles.geral}>
      <div className={styles.wrapper}>
        <div className={styles.frameCentral}>
          <Filtros />
          <AdsHorizontal />
          <div className={styles.icon}>
            <Svg className={styles.Svg} />
          </div>
          <Table />
          <AdsHorizontal />
        </div>
        <div className={styles.frameRight}>
          <AdsVertical />
        </div>
      </div>
    </container>
  );
};
