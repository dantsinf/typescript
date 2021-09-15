import React from 'react';
import './App.css';

/*type Ordem = {
  
}*/

function App() {
  const [cont, setCont] = React.useState<number[]>([]);
  const [min, setMin] = React.useState<number>();
  const [max, setMax] = React.useState<number>();
  /*const mostra = cont.map((e, i) => (
    <p key={i}>{e}</p>
  ));*/
  
  const Resultado = (e: number, i: number) => {
    return cont.map((e, i) => (
      <p key={i}>{e}</p>
    ))
  }

  return (
    <>
    <div className="App">
      {/*<button onClick={()=> setCont([...cont, cont.length+1])}>Add array</button>*/}
      {/*<button onClick={()=> setCont([...cont, Math.random()])}>Add array</button>*/}
      {/*<input type="number" placeholder="Escreva o valor máximo" value={max} onChange={(m) => setMax(m.target.value)}/>*/}
      {/*onChange={(a) => setA(parseInt(a.target.value))}*/}
      <input type="text" name="min" placeholder="Min" onChange={(i)=> setMin(parseInt(i.target.value))}/>
      <input type="text" name="max" placeholder="Max" onChange={(a)=> setMax(parseInt(a.target.value))}/>
      <button onClick={()=> setCont([...cont, Math.floor(Math.random()* 7)+1])}>Sortear</button>
        <p>{Resultado(0,0)}</p>
        <p>{min}</p>
        <p>{max}</p>
    </div>
    </>
  );
}

export default App;
