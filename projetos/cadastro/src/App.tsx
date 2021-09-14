
import './App.css';
import React, { useState } from 'react';

interface IState {
  pessoas{
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
  const [pessoas, setPessoas] = useState<IState["pessoa"]>([])

  pessoas.map(pessoa => {
    pessoa.nome
  })

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
