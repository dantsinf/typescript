import React from 'react';
import './App.css';
import Header from './Header';
//import Header from './Header';
/*eslint-disable no-eval */

const App = () => {
  const [b, setB] = React.useState();
  const [h, setH] = React.useState();

  const Calcular = () => {
    return (b * h) / 2;
  };

  return (
    <>
      <Header />
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
        <p>{isNaN(Calcular()) ? '' : <p>A={Calcular()}</p>}</p>
      </div>
    </>
  );
};

export default App;
