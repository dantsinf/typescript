import './App.css';
import React from 'react';
import api from './api';

function App() {
  const state = {
    filmes: [],
  };

  async function componentDidMout() {
    const response = await api.get('');
    // console.log(response.data);
    this.setState({ filmes: response.data });
  }
  const { filmes } = state;
  return (
    <div className="App">
      <h1>Listar artigos</h1>
      {console.log(filmes)}
      {filmes.map((filme) => (
        <li key={filme.show.id}>
          <h2>
            {' '}
            <strong>Título</strong>{' '}
          </h2>
        </li>
      ))}
    </div>
  );
}

export default App;
