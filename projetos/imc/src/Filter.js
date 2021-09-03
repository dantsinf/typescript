import React from 'react';

const Filter = ({ setValue }) => {
  return <div>{setValue === 0 ? <p>Infome um valor válido</p> : ''}</div>;
};

export default Filter;
