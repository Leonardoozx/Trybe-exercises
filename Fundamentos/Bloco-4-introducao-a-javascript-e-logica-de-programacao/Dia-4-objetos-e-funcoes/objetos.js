// Exemplo de como acessar propriedades de um objeto com mais de uma propriedade:
// Array composto por objetos:
// let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];

//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10

//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

// ---------------------------------------------------------------------------------//

// Para fixar: 

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

player['bestInTheWorld'] = datas = [2006, 2007, 2008, 2009, 2010, 2018];
player['fullName'] = player.name + ' ' + player.lastName;
let howManyTimes = player.bestInTheWorld.length;

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade.');

console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + howManyTimes + ' vezes.');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

console.table(player);