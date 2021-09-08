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
      <form action="wrap" onSubmit={evt => { sendForm(evt) }} >
        <fieldset>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" />
        </fieldset>
        <button type="submit" >Login</button>
      </form>
  );
}

export default App
