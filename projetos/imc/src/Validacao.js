import React from 'react';
//Corrige

const Validacao = ({ p, a }) => {
  return <div>{p !== 0 || (a !== 0 ? '' : 'Informe um valor válido')}</div>;
};

export default Validacao;
