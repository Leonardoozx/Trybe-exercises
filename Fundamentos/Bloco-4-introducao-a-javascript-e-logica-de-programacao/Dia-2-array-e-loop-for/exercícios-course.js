// Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Exercício 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

console.log(soma);

// Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = null;
let resultado = null;
let NumElementos = numbers.length;

for (let i = 0; i < numbers.length; i += 1) {
    somaTotal += numbers[i];
    resultado = somaTotal / NumElementos;
}

console.log(resultado);

// Exercício 4 


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = null;
let resultado = null;
let NumElementos = numbers.length;

for (let i = 0; i < numbers.length; i += 1) {
    somaTotal += numbers[i];
    resultado = somaTotal / NumElementos;
}

if (resultado > 20) {
    console.log('Valor maior que 20');
}
else {
    console.log('Valor menor ou igual que 20');
}

// Exercício 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = null;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNum) {
        maiorNum = numbers[index];
    }
}

console.log(maiorNum);

// Exercício 6

let numbers = [2, 75, 6, 10, 12, 20, 30];
let numImpar = 0;

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        numImpar += 1;
    }
}

if (numImpar === 0) {
    console.log('Não há números ímpares nessa array');
}
else {
    console.log(numImpar + ' ' + 'número ímpar encontrado na array');
}

// Exercício 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < menorNum) {
        menorNum = numbers[i];
    }
}

console.log(menorNum);

// Exercício 8

let array = [];

for (let i = 0; i < 25; i += 1) {
    array.push(i + 1)
}
console.log(array);

// Exercício 9

let array = [];
let divisao = [];

for (let i = 0; i < 25; i += 1) {
    array.push(i + 1);
}
for (let index = 0; index < array.length; index += 1) {
    divisao.push(array[index] / 2);
}

console.log(divisao);
