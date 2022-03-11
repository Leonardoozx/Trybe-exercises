// Exercício 1 - valor esperado (Bem-vinda, Margarida)

console.log('---------------------------- Exercício 1 ----------------------------');


let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

for (let welcome in info) {
    console.log('Bem-vinda,', info.personagem);
    break;
}

// Exercício 2 - adicionar valor

console.log('---------------------------- Exercício 2 ----------------------------');


info['recorrente'] = 'Sim';

console.log(info);

// Exercício 3 - mostrar apenas as chaves do objeto

console.log('---------------------------- Exercício 3 ----------------------------');

for (let keys in info) {
    console.log(keys);
}

// Exercício 4 - mostrar todos os valores

console.log('---------------------------- Exercício 4 ----------------------------');

for (let vallues in info) {
    console.log(info[vallues]);
}

// Exercício 5 - 

console.log('---------------------------- Exercício 5 ----------------------------');

let informing = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
};
informing['recorrente'] = 'Sim';
console.log(info.personagem, 'e', informing.personagem);
console.log(info.origem, 'e', informing.origem);
console.log(info.nota, 'e', informing.nota);
console.log(info.recorrente, '//', informing.recorrente);

console.log('---------------------------- Exercício 6 ----------------------------');

let leitor = {
    nome: 'Júlia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', leitor.livrosFavoritos[0].titulo);

console.log('---------------------------- Exercício 7 ----------------------------');

leitor.livrosFavoritos['segundoLivroFavorito'] = [
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
];

console.log(leitor.livrosFavoritos.segundoLivroFavorito);

console.log('---------------------------- Exercício 8 ----------------------------');

let quantidadeDeLivros = leitor.livrosFavoritos.length +1;

console.log(leitor.nome, 'tem', quantidadeDeLivros, 'livros favoritos.')