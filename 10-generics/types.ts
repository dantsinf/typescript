//boolean (true/false)
let isOpen: boolean
isOpen = true

//string('foo', "foo", `foo`)
let message: string 
message = `foo ${isOpen}`

//number(int, float, hex, binary)
let total: number
//oxff0 é um hexadecimal
total = 0xff0

//array 1
//array(type[])
let items: string[]
items = ["foo", "bar"]

//array 2
//aqui tu informa que é array e depois o tipo
let values: Array<number>
values = [1, 2, 3]

//tuple
let title: [number, string, string]
title = [1, "foo", "bar"]

//enum
//usou um objeto como exemplo
enum Colors {
  white = '#fff',
  black = '#000'
}

//any(qualquer coisa) NÃO É LEGAL!
//não é bom para se usar pois o tipo da variável é QUALQUER COISA
let coisa: any;
coisa = [1];

//void (vazio)
function logger(): void {
  console.log("foo");
}

//null | undefined;
type Bla = string | undefined;

//never
function error(): never {
  throw new Error("error");
}

//objetc
let cart: object;
cart = {
  key: "fi",
};

//######### TYPES INFERENCE
//criar a variavel e depois definir o valor
//tu não precisa mais dizer o tipo,  por isso type inference
let menssage2 = "menssagem definida"
//pois isso é redundância, é claro que é string
//let menssage2: string = "menssagem definida"
menssage2 = "string nova"

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
