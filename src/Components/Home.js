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
    <div className={styles.wrapper}>
      <div className={styles.frameLeft}></div>
      <div className={styles.frameCentral}>
        <div className={styles.adsTopo}>
          {isMobile ? (
            <img
              className={styles.Img}
              src="https://i.imgur.com/i0XRYdI.jpg"
              alt="propaganda mobile"
            />
          ) : (
            <img
              className={styles.Img}
              src="https://i.imgur.com/AXzqSgl.jpg"
              alt="propaganda topo"
            />
          )}
        </div>
        <Filtros />
        <div className={styles.icon}>
          <Svg className={styles.Svg} />
        </div>
        <Table />
      </div>
      <div className={styles.frameRight}></div>
    </div>
  );
};
