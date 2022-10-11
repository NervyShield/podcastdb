import React from 'react';
import { Filtros } from '../Filtos/Filtros';
import styles from './Anteriores.module.css';
import { Context } from '../../Context';
import { AdsHorizontal } from '../Ads/AdsHorizontal';
import { TableNav } from '../TableNav/TableNav';

export const Anteriores = () => {
  let { podcasts, setPodcasts } = React.useContext(Context);
  const { data, setData } = React.useContext(Context);

  React.useEffect(() => {
    async function fetchAnteriores() {
      const options = {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': 'qliumZzpd29VZqlJwRoLWjwbq7BozOifZLV4n6mz',
          'X-Parse-REST-API-Key': 'pjSgrhAVckFbpp6BXXDjXdaBaTHh12xi7gk8bJEp',
        },
      };
      const res = await fetch(
        'https://parseapi.back4app.com/classes/anteriores',
        options,
      );
      if (res.ok);
      const json = await res.json();
      if (res && res.ok) {
        json.results = [...json.results].sort((a, b) =>
          a.data < b.data ? -1 : 1,
        );

        setPodcasts(json.results);
      }
    }
    fetchAnteriores();
  }, [setPodcasts]);

  if (podcasts)
    return (
      <div className={styles.container}>
        <AdsHorizontal />

        <TableNav />
        <table className={`${styles.table}`}>
          <thead className={styles.thead}>
            <tr className={styles.HeadRow}>
              <th>
                {' '}
                Convidado
                <button
                  className={styles.buttonTh}
                  value="name"
                  onClick={console.log('1')}
                ></button>
              </th>
              <th>
                Data
                <button
                  className={styles.buttonTh}
                  value="data"
                  onClick={console.log('1')}
                ></button>
              </th>
              <th>
                {' '}
                Podcast
                <button
                  className={styles.buttonTh}
                  value="podcast"
                  onClick={console.log('1')}
                ></button>
              </th>
            </tr>
          </thead>
          <tbody>
            {podcasts.map((podcast) => (
              <tr key={podcast.objectId} className={styles.tableRow}>
                <td>{podcast.name}</td>
                <td>{podcast.data}</td>
                <td>{podcast.podcast}</td>
                <td className={styles.mobileExpand}></td>
              </tr>
            ))}
          </tbody>
        </table>
        <AdsHorizontal />
      </div>
    );
};
