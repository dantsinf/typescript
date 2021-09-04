import React from 'react';

const Calculo = ({ p, a }) => {
  const calc = p / (a * a);

  return (
    <div>
      {/*toFixed para contar as casas decimais*/}
      {/*<h3>{p && a ? calc.toFixed(1) : ''}</h3>*/}
      <h3>{p != 0 && a != 0 ? calc.toFixed(1) : 'Digite um valor valido'}</h3>
      <h3>{calc == 'NaN' ? 'sim' : ''}</h3>
    </div>
  );
};

export default Calculo;
