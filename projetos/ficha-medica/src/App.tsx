import './App.css';
import React, { useState } from 'react';
import Listas from './Listas';
import AddToListas from './AddToListas';
//import Listas from "./componentes/Listas";

interface IState {
  pessoas: {
      nome: string
      idade: number
      url: string
      descricao?: string
  }[]
}

function App() {

  /*const [pessoas, stPessoas] = useState([
    {
      name: "João Moura",
      url: "",
      idade: 19,
      descricao: "Ansioso para começar em um novo time"
    },
    {
      name: "Silva da Rosa",
      url: "",
      idade: 20
    }
  ]);*/
  const [pessoas, setPessoas] = useState<IState["pessoas"]>([
    {
      nome: "João Moura",
      url: "",
      idade: 19,
      descricao: "Quebrou a perna"
    }    
  ])

  return (
    <div className="App">
      <h1>Lista de pacientes</h1>
      <Listas pessoas={pessoas}/>
      <AddToListas/>
    </div>
  );
}

export default App;
