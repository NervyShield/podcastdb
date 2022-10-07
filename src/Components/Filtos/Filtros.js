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
      <div className={styles.filtrosBox}>
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
      {
        <>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3965027486803898"
            crossorigin="anonymous"
          ></script>
          <ins
            class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-3965027486803898"
            data-ad-slot="5752062818"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle ||[]).push();</script>
        </>
      }
    </div>
  );
};
