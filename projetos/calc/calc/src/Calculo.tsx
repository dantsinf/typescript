import React from 'react';

interface CaclculoProps {
  number1: Number;
  number2: Number;
}

const Calculo: React.FC<CaclculoProps> = ({ number1 }) => {
  return <div>
    <p>{number1}</p>
  </div>;
};

export default Calculo;