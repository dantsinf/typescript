import React from 'react';
import './App.css';

/*type Ordem = {
  
}*/

function App() {
  const [cont, setCont] = React.useState<number[]>([]);
  const mostra = cont.map((e, i) => (
    <p key={i}>{e}</p>
  ));


  return (
    <>
    <div className="App">
      {/*<button onClick={()=> setCont([...cont, cont.length+1])}>Add array</button>*/}
      {/*<button onClick={()=> setCont([...cont, Math.random()])}>Add array</button>*/}
      {/*<input type="number" placeholder="Escreva o valor máximo" value={max} onChange={(m) => setMax(m.target.value)}/>*/}
      <button onClick={()=> setCont([...cont, Math.floor(Math.random()* 7)+1])}>Sortear</button>
        <p>{mostra}</p>
    </div>
    </>
  );
}

export default App;
