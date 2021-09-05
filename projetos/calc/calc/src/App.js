import './App.css';
import React from 'react';
import Calculo from './Calculo';

function App() {
  /*
  const [soma, setSoma] = React.useState();
  const [sub, setSub] = React.useState();
  const [divi, setDivi] = React.useState();
  const [mult, setMult] = React.useState();
  */
  const [n1, setN1] = React.useState(0);
  const [n2, setN2] = React.useState(0);
  const [result, setResult] = React.useState(0);
  let numero1 = parseInt(n1);
  let numero2 = parseInt(n2);
  //let numero2 = parseInt(n2) ? parseInt(n2) : ' Digite um valor numérico';
  //let soma = numero1 + numero2;

  return (
    <div className="App">
      <input
        type="text"
        value={n1}
        onChange={(num1) => {
          setN1(num1.target.value);
        }}
      />
      <input
        type="text"
        value={n2}
        onChange={(num2) => {
          setN2(num2.target.value);
        }}
      />{' '}
      <p>
        Num1: {n1} e Num2: {n2}
      </p>
      <Calculo number2={n2} number1={n1} />
      {/*<p>Resultado: {result}</p> */}
      <p>Resultado: {result}</p>
      {/*<button onClick={() => setResult(soma)}>+</button>*/}
      <button onClick={(calcsoma) => setResult(numero1 + numero2)}>+</button>
    </div>
  );
}
{
  /* */
}
export default App;
