const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Exercício 1
console.log('----------------------- 1 -----------------------');
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const expectedResult1 = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];


const formatedBookNames = (x) => x.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
console.log(formatedBookNames(books));

// Exercício 2
console.log('----------------------- 2 -----------------------');
// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort

const expectedResult2 = [
    {
        age: 31,
        author: 'Isaac Asimov',
    },
    {
        age: 38,
        author: 'H. P. Lovecraft',
    },
    {
        age: 39,
        author: 'Stephen King',
    },
    {
        age: 43,
        author: 'George R. R. Martin',
    },
    {
        age: 45,
        author: 'Frank Herbert',
    },
    {
        age: 62,
        author: 'J. R. R. Tolkien',
    },
];

const nameAndAge = (x) => x.map((y) => ({ age: (y.releaseYear - y.author.birthYear), author: y.author.name })).sort((a, b) => a.age - b.age);
console.log(nameAndAge(books))

// Exercício 3
console.log('----------------------- 3 -----------------------');
// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter ;

const expectedResult3 = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965
    }
];

const fantasyOrScienceFiction = (x) => x.filter((y) => y.genre === 'Ficção Científica' || y.genre === 'Fantasia');
console.log(fantasyOrScienceFiction(books));

// Exercício 4
console.log('----------------------- 4 -----------------------');
// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const expectedResult4 = [
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
    },
];

const oldBooksOrdered = (x) => x.filter((y) => (2022 - y.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);
console.log(oldBooksOrdered(books));

// Exercício 5
console.log('----------------------- 5 -----------------------');
// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const expectedResult5 = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
];

const fantasyOrScienceFictionAuthors = (x) => x.filter((y) => y.genre === 'Ficção Científica' || y.genre === 'Fantasia').map((z) => `${z.author.name}`).sort();
console.log(fantasyOrScienceFictionAuthors(books));

// Exercício 6
console.log('----------------------- 6 -----------------------');
// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult6 = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
];

const oldBooks = (x) => x.filter((y) => (2022 - y.releaseYear) > 60).map((z) => `${z.name}`);
console.log(oldBooks(books));

// Exercício 7
console.log('----------------------- 7 -----------------------');
// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
const expectedResult7 = 'O Senhor dos Anéis';

const authorWith3DotsOnName = (x) => x.filter((y) => y.author.name.match(/\.[^]*\.[^]*\./));
console.log(authorWith3DotsOnName(books)[0].name);
