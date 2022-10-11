import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Link to="/">PodcastDB</Link>
      </div>

      <ul className={styles.nav}>
        <li>
          <p>
            <Link to="privacidade">Termos de uso e Privacidade </Link>
          </p>
        </li>
        <span style={{ marginRight: '5px', marginLeft: '5px' }}>&#10035;</span>
        <li>
          <p>
            <Link to="contato">Entre em contato </Link>
          </p>
        </li>
      </ul>
    </div>
  );
};
