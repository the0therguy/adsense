import React from 'react';
import AdSense from 'react-adsense';

const AdComponent = () => {
  return (
      <>
          <AdSense.Google
              client='ca-pub-7288998721146185'
              slot='8292285304'
              style={{ display: 'block' }}
              layout={'in-article'}
              format={'fluid'}
          />
      </>
  )
}

export default AdComponent