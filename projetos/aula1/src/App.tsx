 import React from 'react';
import './App.css';
//import { Header }from './components/Header';
import Header from './components/Header';


function App() {

  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');

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
      <h2>{idade}</h2> 
      <Header />
    </div>
  );
}

export default App;
