import React from 'react';
import { Context } from '../../Context';
import styles from './Table.module.css';

export const Table = () => {
  let { podcasts } = React.useContext(Context);

  if (podcasts)
    return (
      <>
        <table className={`${styles.table}`}>
          <thead className={styles.thead}>
            <tr className={styles.HeadRow}>
              <th>Convidado</th>
              <th>Data</th>
              <th>Podcast</th>
              <th className={styles.subRow}> Canais</th>
              <th className={styles.mobileExpand}></th>
            </tr>
          </thead>
          <tbody>
            {podcasts.map((podcast) => (
              <tr className={styles.tableRow}>
                <td>{podcast.name}</td>
                <td>{podcast.data}</td>
                <td>{podcast.podcast}</td>
                <td className={styles.mobileExpand}></td>
                {podcast.infos.map((info) => (
                  <>
                    <td className={styles.subRow}></td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
};
