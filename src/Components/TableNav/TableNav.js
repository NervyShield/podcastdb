import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TableNav.module.css';

export const TableNav = () => {
  return (
    <div className={styles.geral}>
      {window.location.href === 'https://www.podcastdb.com.br/' ? (
        <div className={styles.container}>
          <div className={styles.linkAnteriores}>
            <Link to="anteriores">Anteriores </Link>
          </div>
        </div>
      ) : (
        <div className={styles.containerRecentes}>
          <div className={styles.linkRecentes}>
            <Link to="/">Recentes</Link>
          </div>
        </div>
      )}
    </div>
  );
};
