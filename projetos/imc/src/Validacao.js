import React from 'react';
//Corrige

const Validacao = ({ p, a }) => {
  const calc = p / (a * a);
  return (
    <div>
      {/*<h3>{p !== 0 || a !== 0 ? 'Informe um valor válido' : ''}</h3>*/}
      <h3>{calc < 18.5 ? 'Abaixo do peso' : ''}</h3>
      <h3>{calc >= 18.5 && calc <= 24.9 ? 'Peso normal' : ''}</h3>
      <h3>
        {calc > 24.9 && calc < 30 ? 'Sobrepeso (acima do peso desejado)' : ''}
      </h3>
      <h3>{calc >= 30 ? 'Obesidade' : ''}</h3>
    </div>
  );
};

export default Validacao;
