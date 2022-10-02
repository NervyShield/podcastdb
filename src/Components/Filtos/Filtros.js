import React from 'react';
import { Context } from '../../Context';
import styles from './Filtros.module.css';
import { Input } from './Input';

export const Filtros = () => {
  const { data, isMobile } = React.useContext(Context);
  let { podcasts, setPodcasts } = React.useContext(Context);
  const [filterOpen, setFilterOpen] = React.useState(false);

  const diasDaSemana = [
    'Todos',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
    'Domingo',
  ];

  function handleClick(event) {
    podcasts = data;
    const dia = event.target.value.slice(0, 3);
    podcasts = podcasts.filter((podcast) => podcast.data.includes(dia));
    openFilter();
    if (dia === 'Tod') return setPodcasts(data);
    return setPodcasts(podcasts);
  }

  function openFilter() {
    setFilterOpen(!filterOpen);
  }
  function cliqueFora(event) {
    setFilterOpen(false);
  }
  return (
    <div className={styles.filtros}>
      <Input />
      <button className={styles.btnFiltro} onClick={openFilter}>
        Filtrar por dia
      </button>

      {filterOpen && (
        <>
          <div onClick={cliqueFora} className={styles.modalContainer}></div>
          <div className={styles.optionsContainer}>
            {diasDaSemana.map((dia) => (
              <button
                key={dia}
                className={styles.btnFiltro}
                value={dia}
                onClick={handleClick}
              >
                {dia}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
