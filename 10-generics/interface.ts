//são um conjunto de dados para descrever a estrutura do obejto
//interface servem para objetos
interface Game{
  id?: string | number;
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  id: 123,
  title:"The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

console.log(tlou.genre);

if(tlou.getSimilars){
  tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
}

const leftbehind: DLC = {
  title:"The Last of Us",
  description: "You paly as Ellie before the original game",
  genre: "Action",
  platform: ["PS4"],
}

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }

}

