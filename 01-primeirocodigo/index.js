var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.getElementById('button');
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    //o valor está como stringts
    //console.log(sum(input1.value, input2.value));
    //tenho que informar o que é number
    console.log(sum(Number(input1.value), Number(input2.value)));
});
