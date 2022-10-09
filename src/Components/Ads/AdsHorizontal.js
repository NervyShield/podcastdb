import React from 'react';
import AdSense from 'react-adsense';
import { Context } from '../../Context';

export const AdsHorizontal = () => {
  const { isMobile } = React.useContext(Context);

  return (
    <div></div>
    /* <AdSense.Google
      client="ca-pub-3965027486803898"
      slot="5752062818"
      format="auto"
      responsive="true"
      layoutKey="-gw-1+2a-9x+5c"
    />*/
  );
};
