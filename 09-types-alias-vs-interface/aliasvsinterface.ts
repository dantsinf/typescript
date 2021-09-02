//####################### ALIAS VS INTERFACE #################################           

//########################################################           
//############################ Type Alias 
//######################################################## 

//definição
type GameT = {
  title: string;
}

type DLCT = {
  extra: string;
}

//intersection 
type GameCollection = Game & DLCT;

//implements
class CreateGameT implements GameCollection {}

//declarar função
type getSimilarsT = (title: string) => void;

// ################# diferenças 

//permite declarar tipos primitivos
type IDT = string | number;

//permite declarar tuplas normalmente
type TupleT = [number, number];

//isso da erro pois acima foi declarado 2x o number
//[1,2,3] as TupleT;
[1,2] as TupleT;

//Apenas uma declaração por escopo
type JQueryT = { a: string };
type JQueryT = { b: string };

//mais remomentadado:
//na maioria das vezes 
// React - Props
// Consistência!

//########################################################           
//############################ Type Interface
//######################################################## 

//definição
interface Game {
  title: string;
}

interface DLC {
  extra: string;
}

// intersecção | extend
interface GameCollection extends Game, DLC {}

//implements
class CreateGame implements GameCollection {}

//declarar função
interface getSimilars {
  (title: string): void;
}
// ################# diferenças 
interface ID extends number {}

interface Tuple {
  0: number;
  1: number;
}

[1,2,3,4, "sass"] as Tuple;

//Pode ter múltiplas declarações e ele une de mesmo nome
interface JQuery {
  a: string;
}
interface JQuery {
  b: string;
}

const $: JQuery = {
  a: "bla",
  b: "foo",
}

//vantagegem: quando tiver criando libs, prefira Interface, porque são mais extensíveis
//cirnado objeto/classes (POO)