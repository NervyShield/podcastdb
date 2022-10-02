import React from 'react';
import { Context } from '../../Context';
import styles from './Input.module.css';

export const Input = () => {
  const { data } = React.useContext(Context);
  let { setPodcasts } = React.useContext(Context);

  function handleChange(event) {
    const palavraBuscada = event.target.value.toLowerCase();
    const resultadoPesquisa = data.filter(
      (podcast) =>
        podcast.podcast.toLowerCase().includes(palavraBuscada) ||
        podcast.name.toLowerCase().includes(palavraBuscada),
    );
    console.log(palavraBuscada, resultadoPesquisa);
    setPodcasts(resultadoPesquisa);
    if (palavraBuscada.length < 1) setPodcasts(data);
  }

  return (
    <label>
      <input
        className={styles.inputPesquisa}
        type="text"
        placeholder="Pesquisar convidado ou podcast..."
        onChange={handleChange}
      />
    </label>
  );
};
