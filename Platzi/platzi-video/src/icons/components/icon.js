import React from 'react';

const Icon = (props) => {

  const { color, size, children } = props;

  return (
    <svg fill={color} height={size} width={size} viewBox="0 0 32 32">
      { children }
    </svg>
  );

}

export default Icon;
