import React from 'react';
import './App.css';

function App() {
  /*
  a - b
c - x


(c*b)/a
  */

  const [a, setA] = React.useState();
  const [b, setB] = React.useState();
  const [c, setC] = React.useState();

  const Calcular = () => {
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
            nome="ia"
            value={a}
            onChange={(inpa) => setA(inpa.target.value)}
          />
          <span>Está para </span>
          <input
            type="text"
            placeholder="B"
            value={b}
            onChange={(b) => setB(b.target.value)}
          />
        </div>
        <br />
        <div className="segundadiv">
          <input
            type="text"
            placeholder="C"
            value={c}
            onChange={(c) => setC(c.target.value)}
          />
          <span>Está para </span>
          <input type="text" placeholder="X" value={Calcular()} />
        </div>
      </div>
    </>
  );
}

export default App;
