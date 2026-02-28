import React from 'react';

const ShadedStar = ({ shade }) => {
  const normalizedShade = Math.max(0, Math.min(Number(shade) || 0, 1));

  if (normalizedShade <= 0) {
    return null;
  }

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '1ch',
        lineHeight: 1,
      }}
    >
      <span aria-hidden='true'>{'☆'}</span>
      <span
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to right, currentColor ${normalizedShade * 100}%, transparent ${normalizedShade * 100}%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {'★'}
      </span>
    </span>
  );
};

export default ShadedStar;
