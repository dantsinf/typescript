//classes e definiu propriedades 
class UserAccount {
  name: string;
  age: number;

  //os tipos de valores que vai receber
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}

const will = new UserAccount("Willian", 30);
console.log(will);

