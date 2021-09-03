import React from 'react';

const Calculo = ({ p, a }) => {
  const calc = p / (a * a);

  return (
    <div>
      <p>{p && a ? calc.toFixed(1) : ''}</p>
    </div>
  );
};

export default Calculo;
