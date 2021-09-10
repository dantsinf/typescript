import React, { FC } from "react";
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Fale.." />
          <input type="text" placeholder="Linha da morte(em dias)..." />
        </div>
        <button>Adicionar fala</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
