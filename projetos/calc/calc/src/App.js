import React from 'react';
import './App.css';
/*eslint-disable no-eval */

const App = () => {
  const [resultado, setResultado] = React.useState();
  const [b, setB] = React.useState();
  const [h, setH] = React.useState();

  const Calcular = () => {
    return (b * h) / 2;
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          name="b"
          placeholder="base/b"
          onChange={(b) => setB(parseInt(b.target.value))}
        />
        <input
          type="text"
          name="h"
          placeholder="altura/h"
          onChange={(h) => setH(parseInt(h.target.value))}
        />
        {/* impede valor NaN na tela */}
        <p>{isNaN(Calcular()) ? '' : Calcular()}</p>
        <p>{toString(b) ? 'ok' : 'false'}</p>
      </div>
    </>
  );
};

export default App;
