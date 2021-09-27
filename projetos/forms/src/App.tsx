import type { FormEvent } from 'react'
import './App.css'


const sendForm = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

const { name, password } = event.target as typeof event.target & {
  name: {value: string}
  password: {value: number}
}
console.log(name.value, password.value );
alert('Nome: ' + name.value + '\nSenha: ' + password.value)
window.location.href = "https://www.google.com/";
}

function App() {
  return (
      <form  action="wrap" onSubmit={evt => { sendForm(evt) }} >
        <div className="container">
        <fieldset>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" />
        </fieldset>
        </div>

        <div className="container">
           <button type="submit" >Entrar</button>
        </div>
        
      </form>
  );
}

export default App
