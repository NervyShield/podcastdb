import React from 'react';
import { AdsHorizontal } from '../Ads/AdsHorizontal';

export const Contato = () => {
  return (
    <div style={{ paddingTop: '7rem', height: '100vh', textAlign: 'center' }}>
      <AdsHorizontal />
      <h1 style={{ fontSize: '50px', marginBottom: '4rem' }}>Contato</h1>
      <p>
        Entre em contato pelo email:{' '}
        <email style={{ textDecoration: 'underline' }}>
          podcastdb@gmail.com.br
        </email>
      </p>
      <AdsHorizontal />
    </div>
  );
};
