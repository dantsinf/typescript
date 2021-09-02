/*
S => State
T => Type
k => Key
V => Value
E =>  Element

a letra pode ser o que tu quiser ela é só uma referência
*/

//muito usado nos Hooks e uma variedade de bibliotecas

type numOrStr = number | string;

//isso é um generic, props e state pode ser qualquer coisa que definirmos
//React.FC<Props, State>

//generic nos hooks
function useState<S extends numOrStr = string>(){
  let state: S;

  //mostra
  function getState(){
     return state;
  }

  //informa novo estado
  function setState(newState: S){
    state = newState;
  }

  return { getState, setState };
}

const newState = useState<string>();

//newState.setSate(false); //é uma string
//console.log(newState.getState());

newState.setState("foo"); // é uma string
console.log(newState.getState());
/*
newState.setState(123); // da erro pois foi declarado string 
console.log(newState.getState());
*/
newState.setState("vish");  
console.log(newState.getState());

