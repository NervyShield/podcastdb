import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <logo className={`${styles.nav}`}>
        <Link to="/">PodcastDB</Link>
      </logo>
      <span className={styles.Span}>|</span>
      <nav>
        <ul>
          <li>
            <Link to="/destaques">Destaques</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
