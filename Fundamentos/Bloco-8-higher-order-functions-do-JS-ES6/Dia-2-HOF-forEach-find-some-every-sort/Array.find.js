console.log('1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:');

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (num) => num % 3 === 0 && num % 5 === 0;
console.log(numbers.find(findDivisibleBy3And5));

// console.log(findDivisibleBy3And5(numbers))

console.log('2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:');

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome5) => nome5.length === 5;
console.log(names.find(findNameWithFiveLetters));

// console.log(findNameWithFiveLetters());

console.log('3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:');

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

// const findMusic = () => musicas.find((m) => m.id === '31031685'); 

// function findMusic(id) {
//     return musicas.find((m) => m.id === '31031685');
// };

// Duas formas de fazer o mesmo exercício.

// console.log(findMusic())