
//accountInfo
//charInfo

type AccountInfo = {
  id: number;
  name: string;
//? para tirar o erro pois infroma que é opcional
  email?:string;
}

const account: AccountInfo = {
  id: 123,
  name: "Willian"
}
type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: "Willjusten",
  level: 100,
};

//Intersection
//juntou os dois então tens que informar todos os argumentos
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  name: "Willian",
  nickname: "Willjusten",
  id: 123,
  level: 100,
}