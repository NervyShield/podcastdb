import React from 'react';

export const api = () => {
  async function fetchPodcasts() {
    const res = await fetch('http://localhost:3004/Podcasts');
    const data = await res.json();
    console.log(data);
    return data;
  }
  fetchPodcasts();

  return <div>{console.log('deu certo')}</div>;
};
