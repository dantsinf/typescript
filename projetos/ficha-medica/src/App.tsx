import React, { useState } from 'react';
import './App.css';
import List from './List';
import AddToList from './AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "João Moura",
      age: 35,
      img: "https://reliablery.com/images/profile/1613964753_1_Justin%20Sylvester%201.jpg",
      note: "Com ansiedade",
    },
    {
      name: "Silva da Rosa",
      age: 20,
      img: "https://4.bp.blogspot.com/-u5L1pAaS5AU/WeeQpNMt16I/AAAAAAAAKGU/xbXkIOVZDtUDngqnOtrvYIL4nejAxWq9gCEwYBhgL/s1600/shay-mitchell.jpg",
      note: "Dor nas costas",
    }
  ])

  return (
    <div className="App">
      <h1>Lista de pacientes</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;