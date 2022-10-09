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
            <Link to="/">Termos de uso e Privacidade </Link>
          </p>
        </li>
        <li></li>
      </ul>
    </div>
  );
};
