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

//Factory
function Logger(prefix: string){
  return (target) => {
    console.log(target);
  };
}
@Logger("awesome")
class Foo {}