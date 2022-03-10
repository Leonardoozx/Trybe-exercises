// Exercício 1 - fatorial de 10

let fatorial = 1;

for (let i = 10; i > 0; i -= 1) {
    fatorial *= i;
}
console.log('O fatorial de 10, é: ' + fatorial);

// Exercício 2 - inverting the word

let word = 'tryber';
let invertedWord = word.split('').reverse('').join('');
console.log(invertedWord);

// Exercício 3 - retornar a maior e a menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallerWord = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggerWord.length) {
        biggerWord = array[index];
    }
}
for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < smallerWord.length) {
        smallerWord = array[i];
    }
}

console.log(smallerWord);
console.log(biggerWord);

// Exercício 4 - números primos

let numeros = [];
let primo = [];

for (let index = 1; index < 50; index += 1) {
    numeros.push(index + 1);
}
for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 2 !== 0 && numeros[i] % numeros[i] == 0 && numeros[i] % 3 !== 0 &&
        numeros[i] % 5 !== 0 && numeros[i] % 7 !== 0
    ) {
        primo.push(numeros[i]);
    }
}

console.log('Maior número primo entre 0 e 50 é o: ' + primo[primo.length -1]);