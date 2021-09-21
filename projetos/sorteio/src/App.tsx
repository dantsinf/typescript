import React from "react";
import "./App.css";

/*type Ordem = {
  
}*/

function App() {
  const [cont, setCont] = React.useState<number[]>([]);
  const [min, setMin] = React.useState<number>(0);
  const [max, setMax] = React.useState<number>(0);
  const [umresult, setUmresult] = React.useState<number>(0);
  /*const mostra = cont.map((e, i) => (
    <p key={i}>{e}</p>
  ));*/

  /*const Resultado = (e: number, i: number) => {
    return cont.map((e, i) => <p key={i}>{e}</p>);
  };*/

  return (
    <>
      <div className="App">
        {/*<button onClick={()=> setCont([...cont, cont.length+1])}>Add array</button>*/}
        {/*<button onClick={()=> setCont([...cont, Math.random()])}>Add array</button>*/}
        {/*<input type="number" placeholder="Escreva o valor máximo" value={max} onChange={(m) => setMax(m.target.value)}/>*/}
        {/*onChange={(a) => setA(parseInt(a.target.value))}*/}
        <div className="campo">
          <span>Máximo</span>
          <input
            className="campo-numero"
            type="text"
            name="min"
            placeholder="Min"
            onChange={i => setMin(parseInt(i.target.value))}
          />
          <span>mínimo</span>
          <input
            className="campo-numero"
            type="text"
            name="max"
            placeholder="Max"
            onChange={a => setMax(parseInt(a.target.value))}
          />
          <button
            onClick={(a) =>
              //array de números aleatórios, para usar remova umresult
              //setCont([...cont, Math.floor(Math.random() * max) + min])
             setUmresult(Math.floor(Math.random() * max) + min)
            }
          >
            Sortear
          </button>
          {/*<p>{Resultado(0, 0)}</p>*/}
          {/*filtro de string*/}
          {/*<h3 className="erros">{isNaN(umresult) ? <p>Digite um valor numérico</p> : umresult}</h3> */}
          <h3 className="erros">{umresult <= 0 ? "" : <h2>{umresult}</h2> }</h3> 
        </div>
      </div>
    </>
  );
}

export default App;
