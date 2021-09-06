import React from 'react';

type Filter = {
  number1: Number;
  number2: Number;
}
/*
function soma(number1: number, number2: number) {
  const result = number1+number2;
  console.log(result);
}*/
const Calculo: React.FC<Filter> = ({ number1, number2 }) => {

  const soma = () => {;
  }

  return <div>
    {number2}
  </div>;
};

export default Calculo;