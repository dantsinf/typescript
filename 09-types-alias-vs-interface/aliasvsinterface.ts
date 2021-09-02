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
