import React from 'react';
/*eslint-disable no-eval */

const App = () => {
  const [resultado, setResultado] = React.useState('');

  const handleClick = (e) => {
    setResultado(resultado.concat(e.target.name));
  };

  const limpa = () => {
    setResultado('');
  };

  const espaco = () => {
    setResultado(resultado.slice(0, resultado.length - 1)); // ou -1
  };

  const calcula = () => {
    try {
      //setResultado(this.eval(resultado).toSring());
      setResultado(eval(resultado).toSring());
    } catch (err) {
      setResultado('Error');
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={resultado} />
        </form>

        <div className="botoes">
          <button className="claro" onClick={limpa} id="limpa">
            Limpar
          </button>
          <button className="claro" onClick={espaco} id="espaco">
            C
          </button>
          <button className="claro" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="claro" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="claro" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="claro" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button className="claro" name="*" onClick={handleClick}>
            .
          </button>
          <button onClick={calcula} id="resultado">
            =
          </button>
          <p>{resultado}</p>
        </div>
      </div>
    </>
  );
};

export default App;
