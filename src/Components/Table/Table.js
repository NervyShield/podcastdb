import React from 'react';
import { Context } from '../../Context';
import styles from './Table.module.css';
import { ReactComponent as DownArrow } from '../../Assets/downarrow.svg';
import { ReactComponent as ArrowUp } from '../../Assets/uparrow.svg';

export const Table = () => {
  let { podcasts, setPodcasts } = React.useContext(Context);
  const { data } = React.useContext(Context);

  const [filtrado, setFiltrado] = React.useState(false);

  function Ordenador(event) {
    setFiltrado(!filtrado);
    const thtarget = event.target.value;
    console.log(filtrado);
    if (filtrado && thtarget === 'name') {
      setPodcasts([...podcasts].sort((a, b) => (a.name < b.name ? -1 : 1)));
      setFiltrado(!filtrado);
    } else if (!filtrado && thtarget === 'name') {
      setPodcasts([...podcasts].sort((a, b) => (a.name > b.name ? -1 : 1)));
    } else if (filtrado && thtarget === 'data') {
      setPodcasts([...podcasts].sort((a, b) => (a.data < b.data ? -1 : 1)));
    } else if (!filtrado && thtarget === 'data') {
      setPodcasts([...podcasts].sort((a, b) => (a.data > b.data ? -1 : 1)));
    } else if (filtrado && thtarget === 'podcast') {
      setPodcasts(
        [...podcasts].sort((a, b) => (a.podcast < b.podcast ? -1 : 1)),
      );
    } else if (!filtrado && thtarget === 'podcast') {
      setPodcasts(
        [...podcasts].sort((a, b) => (a.podcast > b.podcast ? -1 : 1)),
      );
    } else {
      setPodcasts(data);
    }
  }

  if (podcasts)
    return (
      <>
        <table className={`${styles.table}`}>
          <thead className={styles.thead}>
            <tr className={styles.HeadRow}>
              <th>
                Convidado
                <button
                  className={styles.buttonTh}
                  value="name"
                  onClick={Ordenador}
                >
                  <DownArrow />
                </button>
              </th>
              <th>
                Data
                <button
                  className={styles.buttonTh}
                  value="data"
                  onClick={Ordenador}
                >
                  <DownArrow />
                </button>
              </th>
              <th>
                {' '}
                Podcast
                <button
                  className={styles.buttonTh}
                  value="podcast"
                  onClick={Ordenador}
                >
                  <DownArrow />
                </button>
              </th>
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
