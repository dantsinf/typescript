//Type Alias 
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