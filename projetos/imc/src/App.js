import React from 'react';
import './App.css';

const App = () => {
  const [altura, setAltura] = React.useState();
  const [peso, setPeso] = React.useState();
  const [calc, setCalc] = React.useState();

  return (
    <div className="App">
      <h1>IMC</h1>
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

        <p>{peso / (altura * altura)}</p>
      </label>
    </div>
  );
};

export default App;
