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
function setAPIVersion(apiVersion: string) {
  return (constructor) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}

// decorator - anotar a versão da API
//@setAPIVersion("1.0.0")
//class API {}

//console.log(new API());

//Property decorator

class Movie {
  //validação - se for menor que 5 - error
  title: string;

  constructor(t: string) {
    this.title = t;
  }

}