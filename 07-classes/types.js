"use strict";
//boolean (true/false)
var isOpen;
isOpen = true;
//string('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
//number(int, float, hex, binary)
var total;
//oxff0 é um hexadecimal
total = 0xff0;
//array 1
//array(type[])
var items;
items = ["foo", "bar"];
//array 2
//aqui tu informa que é array e depois o tipo
var values;
values = [1, 2, 3];
//tuple
var title;
title = [1, "foo", "bar"];
//enum
//usou um objeto como exemplo
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//any(qualquer coisa) NÃO É LEGAL!
//não é bom para se usar pois o tipo da variável é QUALQUER COISA
var coisa;
coisa = [1];
//void (vazio)
function logger() {
    console.log("foo");
}
//never
function error() {
    throw new Error("error");
}
//objetc
var cart;
cart = {
    key: "fi",
};
//######### TYPES INFERENCE
//criar a variavel e depois definir o valor
//tu não precisa mais dizer o tipo,  por isso type inference
var menssage2 = "menssagem definida";
//pois isso é redundância, é claro que é string
//let menssage2: string = "menssagem definida"
menssage2 = "string nova";
//outra redunância
/* part1 não precisa dizer que e eé MouseEvent
window.addEventListener("click", (e: MouseEvent)=>{
  console.log(e.target);
  console.log(e.foo);
  })*/
/* part2
window.addEventListener("click", (e: MouseEvent)=>{
console.log(e.target);
console.log(e.foo);
})*/
