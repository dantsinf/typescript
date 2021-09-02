"use strict";
/*
@Component
@Selector
@useState("ddfas")
-------------------------
Class decorator
Property decorator
Method decorator
Parameter decorator
Acessor decorator
*/
//decorator é uma função que recebe parametros por default e retorna
//Factory
/*
function Logger(prefix: string){
  return (target) => {
    console.log(`${prefix} - ${target}`);
  };
}
@Logger("awesome")
class Foo {}
*/
//############ Class Decorator
/*
function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}
*/
// decorator - anotar a versão da API
//@setAPIVersion("1.0.0")
//class API {}
//console.log(new API());
//Property decorator
/*
function minLenght(lenght: number){
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val;

    const setter = (value: string) => {
      if(value.length < lenght){
        console.log(`Error: você não pode criar ${key} menor que ${length}.`);
      }else{
        val = value
      }
    }
  };
}*/
/*
class Movie {
  //validação - se for menor que 5 - error
  title: string;

  constructor(t: string) {
    this.title = t;
  }

}*/
//const movie = new Movie ("Interstellar");
//console.log(movie.title);
//Method decorator
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    Greeter.prototype.greet = function () {
        console.log("Ola! " + this.greeting);
    };
    return Greeter;
}());
var pessoinha = new Greeter("Pessoinha");
pessoinha.greet();
