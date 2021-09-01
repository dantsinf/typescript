//classes e definiu propriedades 
//propriedades: public, privated e readonly
//classes abstratas não permitem que nada seja criado após elas 
abstract class UserAccount {
  public name: string;
  //chamar na classe ou em outras e diferente do privated que é só na classe
  protected age: number;

  //os tipos de valores que vai receber
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  logDetails(): void {
    console.log(`O jogador ${this.name} tem ${this.age} anos`);
  }
}

class CharAccount extends UserAccount {
  //privete para não permitir mudançar no nome
  //privete te permite chamar a propriedade somente dentro da classe
  private nickname: string;
  //readonly não conseguimos alterar pois se tornou uma propriedade que so pode der lida
  //readonly level: number;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number){
    //peguei as proproedades de vou estender
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  // get e set para  pegar valores das classes
  //GET é uma função e não prop
  get getLevel(){
    console.log("-----GET-----");
    return this.level
  }

  set setLevel(level: number){
    this.level = level
  }

  logCharDetails(): void {
    console.log(`O jogador ${this.name} tem ${this.age} e tem o char ${this.nickname} no nivel ${this.level}`);
    
  }
}


/*const will = new UserAccount("Willian", 30);
console.log(will);
//chamou logDetails():void
will.logDetails();*/

//atraves de uma classe consguimos "mudar" os valores
const john = new CharAccount("John", 45, "johmaster", 80);
//console.log(john);
//john.nickname = "willjusten";
console.log(john);
//john.level = 799, não funciona pois só pode ser lida
console.log(john.level);
john.logDetails();
john.logCharDetails();
john.setLevel = 499
console.log(john.getLevel);

/*
- classes são criadas com Class
- Comecamos os nomes das classes em maiúsculo
- acessos são os gets e sets, vão retornar ou definir valor
- abstratec classes não podemos criar objetos apoós essas classes

*/

