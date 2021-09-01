const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const button = document.getElementById('button');

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", function () {
  //o valor está como stringts
  //console.log(sum(input1.value, input2.value));
  //tenho que informar o que é number
  console.log(sum(Number(input1.value), Number(input2.value)));
});
