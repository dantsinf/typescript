import type { FormEvent } from 'react'
import './App.css'


const sendForm = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

const { name, password } = event.target as typeof event.target & {
  name: {value: string}
  password: {value: string}
}
console.log(name.value, password.value );

}

function App() {
  return (
      <form  action="wrap" onSubmit={evt => { sendForm(evt) }} >
        <div className="container">
        <fieldset>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />

          <label htmlFor="password">Senha:</label>
          <input type="text" id="password" />
        </fieldset>
        </div>

        <div className="container">
           <button type="submit" >Entrar</button>
        </div>
        
      </form>
  );
}

export default App
