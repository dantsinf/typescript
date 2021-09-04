import React from 'react';
import './App.css';
import Calculo from './Calculo';
import Filter from './Validacao';
import Input from './Input';
import Validacao from './Validacao';

const App = () => {
  const [altura, setAltura] = React.useState('Digite a altura');
  const [peso, setPeso] = React.useState('Digite o peso');
  const [calc, setCalc] = React.useState(null);
  //const calc = pe / (a * a);

  return (
    <div className="App">
      <h1>IMC</h1>
      {/* aquando era sem componente input
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
      <Input id="altura" label="Altura" value={altura} setValue={setAltura} />
      <Input id="peso" label="Peso" value={peso} setValue={setPeso} />
      {/*toFixed para contar as casas decimais*/}
      {/*<p>{peso && altura ? calc.toFixed(1) : ''}</p>*/}
      {/*enviando dados para o componente calculo*/}
      <Calculo p={peso} a={altura} />
      <Validacao p={peso} a={altura} />
    </div>
  );
};

export default App;
