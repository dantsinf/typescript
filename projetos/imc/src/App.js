import React, { useState, useEffect } from 'react';
import './App.css';
// import Calculo from "./Calculo";
// import Filter from "./Validacao";
import Input from './Input';
// import Validacao from "./Validacao";
import Footer from './Footer';

const INITIAL_IMC_STATE = {
  peso: {
    value: '',
    error: false,
  },
  altura: {
    value: '',
    error: false,
  },
  imc: 0,
  description: '',
  isValid: false,
};

const ENUM_TEXT = {
  BAIXO: 'Abaixo do peso',
  MEDIO: 'Peso normal',
  ALTO: 'Sobrepeso (acima do peso desejado)',
  MUITO_ALTO: 'Obesidade',
};

const App = () => {
  const [{ peso, altura, imc, description, isValid }, setImcState] =
    useState(INITIAL_IMC_STATE);

  const handleChangePeso = ({ target }) => {
    if (target.value > 0) {
      setImcState((prevState) => ({
        ...prevState,
        peso: {
          value: target.value,
          error: false,
        },
      }));
    } else {
      setImcState((prevState) => ({
        ...prevState,
        peso: {
          value: target.value,
          error: true,
        },
      }));
    }
  };

  const handleChangeAltura = ({ target }) => {
    if (target.value > 0) {
      setImcState((prevState) => ({
        ...prevState,
        altura: {
          value: target.value,
          error: false,
        },
      }));
    } else {
      setImcState((prevState) => ({
        ...prevState,
        altura: {
          value: target.value,
          error: true,
        },
      }));
    }
  };

  const handleCalculate = () => {
    let calc = peso.value / (altura.value * altura.value);
    if (calc <= 0) {
      setImcState((prevState) => ({ ...prevState, isValid: false }));
      return;
    }

    if (calc < 18.5) {
      setImcState((prevState) => ({
        ...prevState,
        imc: calc,
        description: ENUM_TEXT.BAIXO,
        isValid: true,
      }));
      return;
    }

    if (calc >= 18.5 && calc <= 24.9) {
      setImcState((prevState) => ({
        ...prevState,
        imc: calc,
        description: ENUM_TEXT.MEDIO,
        isValid: true,
      }));
      return;
    }

    if (calc > 24.9 && calc < 30) {
      setImcState((prevState) => ({
        ...prevState,
        imc: calc,
        description: ENUM_TEXT.ALTO,
        isValid: true,
      }));
      return;
    }

    if (calc > 30) {
      setImcState((prevState) => ({
        ...prevState,
        imc: calc,
        description: ENUM_TEXT.MUITO_ALTO,
        isValid: true,
      }));
      return;
    }
  };

  useEffect(() => {
    if (!peso.error && !altura.error) {
      handleCalculate();
    }
  }, [peso, altura]);

  //const [genero, setGenero] = React.useState();

  const radioChange = (event) => {
    const target = event.target;
    const name = event.name;
    const value = target.value;
    alert(`Gênero:${value}`);
    //console.log(`${value}`);
  };

  return (
    <div className="App">
      <h1>IMC</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1934/1934400.png"
        width="300"
        height="250"
      />
      <form action="">
        <label class="container">
          Masculino
          <input
            type="radio"
            value="masculino"
            name="genero"
            onChange={radioChange}
          />
        </label>
        <label class="container">
          Feminino
          <input
            type="radio"
            value="feminino"
            name="genero"
            onChange={radioChange}
          />
        </label>
        <Input
          type="text"
          id="altura"
          name="altura"
          label="Altura"
          value={altura.value}
          onChange={handleChangeAltura}
          error={altura.error}
        />
        <Input
          type="text"
          name="peso"
          id="peso"
          label="Peso"
          value={peso.value}
          onChange={handleChangePeso}
          error={peso.error}
        />
      </form>
      <div className="result">
        {isValid && <h3>{imc.toFixed(1)}</h3>}
        {isValid && <h3>{description}</h3>}
      </div>
      <Footer />
    </div>
  );
};

export default App;
