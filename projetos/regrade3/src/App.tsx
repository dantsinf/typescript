import React from 'react';
import './App.css';

type Modelo = {
  a: number
  b: number
  c: number
}

function App() {

  const [a, setA] = React.useState<Number>();
  const [b, setB] = React.useState<Number>();
  const [c, setC] = React.useState<Number>();

  const Calcular = (a: number, c: number, b: number ) => {
    return (c * b) / a;
  };

  /*const Resposta = ({ Calcular }) => {
    if (Calcular() == null) {
      <p>É nulo</p>;
    }
  };*/

  return (
    <>
      <div className="App">
        <div className="primeiradiv">
          <input
            type="text"
            placeholder="A" 
            /* (e) => setIdPadre( parseInt(e.target.value) )*/
            onChange={(a) => setA(parseInt(a.target.value))}
          />
          <span>Está para </span>
          <input
            type="text"
            placeholder="B" 
            onChange={(b) => setB(parseInt(b.target.value))}
          />
        </div>
        <br />
        <div className="segundadiv">
          <input
            type="text"
            placeholder="C" 
            onChange={(c) => setC(parseInt(c.target.value))}
          />
          <span>Está para </span>
          <input type="text" placeholder="X" value={Calcular(0,0,0)} />
        </div>
      </div>
    </>
  );
}

export default App;
