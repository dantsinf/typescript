import React from "react";
import "./App.css";
/*eslint-disable no-eval */

const App = () => {
  const [resultado, setResultado] = React.useState();
  const [n1, setN1] = React.useState();
  const [n2, setN2] = React.useState();

  /*const Calcular = () => {
    return setResultado(val.target.value);
  };*/

  return (
    <>
      <div className="container">
        <input
          type="text"
          name="n1"
          onChange={np => setN1(parseInt(np.target.value))}
        />
        <input
          type="text"
          name="n2"
          onChange={ns => setN2(parseInt(ns.target.value))}
        />
        <button
          value="+"
          name="+"
          onClick={val => setResultado(val.target.value)}
        >
          +
        </button>
        <p>{n1}</p>
        <p>{n2}</p>
        <p>{resultado}</p>
      </div>
    </>
  );
};

export default App;
