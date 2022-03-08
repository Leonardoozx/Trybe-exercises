// Exercício 1

const a = 5;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const aa = 6;
const bb = 2;

// Exercício 2

if (aa > bb) {
    console.log(aa);
}
else {
    console.log(bb)
}

// Exercício 3

const num1 = 3;
const num2 = 6;
const num3 = 9;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else {
    console.log(num3);
}

// Exercício 4

const valor = -5;

if (valor > 0) {
    console.log("positive");
}
else if (valor < 0) {
    console.log("negative");
}
else {
    console.log(zero);
}
// Exercício 5

const anguloA = 60;
const anguloB = 60;
const anguloC = 60;
let triangulo = anguloA + anguloB + anguloC;

if (triangulo === 180) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 6

let peça = ['rei', 'damatorre', 'bispo', 'cavalo', 'peão'];
let mensagem;

if (peça = 'bispo') {
    mensagem = 'movimentos diagonais';
}
else {
    mensagem = 'peça inválida';
}
console.log(mensagem);

// Exercício 7

const porcentagem = 60;

if (porcentagem >= 90) {
    console.log('A');
}
else if (porcentagem >= 80) {
    console.log('B');
}
else if (porcentagem >= 70) {
    console.log('C');
}
else if (porcentagem >= 60) {
    console.log('D');
}
else if (porcentagem >= 50) {
    console.log('E');
}
else if (porcentagem < 50) {
    console.log('F');
}
else {
    console.log('ERRO!');
}

// Exercício 8

const number1 = 8;
const number2 = 23;
const number3 = 11;

if (number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 9 

const number1 = 8;
const number2 = 22;
const number3 = 11;

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 10

const custo = 50;
const venda = 80;
const custoTotal = custo + (custo % 20);
const lucro = (venda - custoTotal) * 1000;

console.log(lucro);

// Exercício 11

const salario = 5000.60;
let resultado = null;

if (salario <= 1556.94) {
    resultado = salario + (salario % 8);
    console.log(resultado);
}
else if (salario >= 1556.94 && salario <= 2594.92) {
    resultado = salario + (salario % 9);
    console.log(resultado);
}
else if (salario >= 2594.92 && salario <= 5189.82) {
    resultado = salario + (salario % 11);
    console.log(resultado);
}
else {
    console.log('Alíquota máxima de 570.00 reais')
}