 import React from 'react';
import './App.css';
import Header from './components/Header';
//import Header from './components/Header';


function App() {

  //1. toda a variável que foi criada aqui, foi criada no typescript com nome da type Form
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState(parseInt(''))
  //const [cormuda, setCormuda] = React.useState('#993300');

  const handleChangeNome = (event: any) => { //o event pode ter qualquer nome e any pois ele precisa receber uma tipagem
      setNome(event.target.value) 
  }

  const handleChangeIdade = (event: any) => { //o event pode ter qualquer nome e any pois ele precisa receber uma tipagem 
    setIdade(event.target.value)
}

  return (
    <div className="App">  

        
      <input type="text" value={nome} onChange={handleChangeNome} />
      <input type="text" value={idade} onChange={handleChangeIdade} />
      <h2>{nome}</h2>
      {/*2. mandei as const para o outro componente*/}
      <h2>{!idade && !nome ? " " : <Header nome={nome} idade={idade} /> }</h2>
    </div>
  );
}

export default App;
