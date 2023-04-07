import React, { useState, useEffect } from 'react';

const ShadedStarHelper = ({shade}) => {
  const gradients = {
    .25: `linear-gradient(to left, black 60%, white 25%)`,
    .5: `linear-gradient(to right, white 50%, black 50%)`,
    .75: `linear-gradient(to right, white 60%, black 25%)`,
  }

  const gradient = gradients[shade];

  if (shade > 0) {
    return (
      <div>
        <div style={{
          position: 'absolute',
          zIndex: 100,
        }}>
          {'☆'}
        </div>
        <div style={{
          backgroundImage: gradient,
          position: 'absolute',
          zIndex: 100,
          WebkitBackgroundClip: 'text',
          MozBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          MozTextFillColor: 'transparent'
        }}>
          {'★'}
        </div>
        <div style={{
          position: 'absolute',
          zIndex: 100,
        }}>
          {'☆'}
        </div>
      </div>);
  } else {
    return <div style={{position: 'absolute', zIndex: 100}}></div>;
  }
}

export default ShadedStarHelper;