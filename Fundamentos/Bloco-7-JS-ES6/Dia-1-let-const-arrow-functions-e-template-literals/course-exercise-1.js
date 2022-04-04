// function testingScope(escopo) {
//     if (escopo === true) {
//         var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//         console.log(ifScope);
//     } else {
//         var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }testingScope(true);

// Refatorando o código:

let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora do meu escopo (else)'
const testingScope = escopo =>
    escopo ? `${ifScope}, ótimo, fui utilizada no escopo !` : `${elseScope}`;

console.log(testingScope(true));

console.log('------------------- Parte 2 -------------------');

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [
    13,
    3,
    4,
    10,
    7,
    2
];

const orderConsts = (a, b) => a - b;

console.log(`Os números, ${oddsAndEvens.sort(orderConsts)
    }, se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
console.log('--------------------------------------');
console.log('Outra forma de resolver também, é com uma arrow function dentro do prório sort:');

console.log(`Os números, ${oddsAndEvens.sort((a, b) => a - b)
    }, se encontram de forma crescente!`);