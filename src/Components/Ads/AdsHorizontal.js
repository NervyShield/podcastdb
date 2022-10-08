import React from 'react';
import AdSense from 'react-adsense';

export const AdsHorizontal = () => {
  return (
    <AdSense.Google
      client="ca-pub-3965027486803898"
      slot="5376943709"
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
      style={{ height: 100 }}
    />
  );
};
