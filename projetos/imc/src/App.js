import React from 'react';
import './App.css';
import Input from './Input';

const App = () => {
  const [altura, setAltura] = React.useState(null);
  const [peso, setPeso] = React.useState(null);
  const calc = peso / (altura * altura);

  return (
    <div className="App">
      <h1>IMC</h1>
      {/*
             <label htmlFor="">
        <input
          type="text"
          id="peso"
          placeholder="Digite o peso"
          value={peso}
          onChange={(p) => setPeso(p.target.value)}
        />
      </label>

      <label htmlFor="">
        <input
          type="text"
          id="altura"
          placeholder="Digite o altura"
          value={altura}
          onChange={(a) => setAltura(a.target.value)}
        />
        </label>
        */}
      <Input
        id="altura"
        label="Altura"
        type="number"
        value={altura}
        setValue={setAltura}
      />
      <Input
        id="peso"
        label="Peso"
        type="number"
        value={peso}
        setValue={setPeso}
      />
      {/*toFixed para contar as casas decimais*/}
      <p>{peso && altura ? calc.toFixed(1) : ''}</p>
    </div>
  );
};

export default App;