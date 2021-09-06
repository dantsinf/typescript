import React from 'react';

const App = () => {
  const [resultado, setResultado] = React.useState('');

  const handleClick = (e) => {
    setResultado(resultado.concat(e.target.value));
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={resultado} />
        </form>

        <div className="botoes">
          <button onClick={handleClick}>Limpar</button>
          <button onClick={handleClick}>C</button>
          <button onClick={handleClick}>&divide;</button>
        </div>
      </div>
    </>
  );
};

export default App;
