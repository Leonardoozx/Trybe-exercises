// Peguei essa referência do stackoverflow, um rapaz epxlicou que o /\s+ faz você procurar por espaços, e o /\s+/g faz você procurar por TODOS os espaços;
// https://pt.stackoverflow.com/questions/318243/remover-espa%C3%A7os-de-uma-string-a-partir-da-segunda-ocorr%C3%AAncia
// let str = 'abc defghijk lmnop qrstuv wx y z'
// str = str.replace(/\s+/g, '_')
// console.log(str)

console.log('----------------------- Atividade 1 -----------------------');

const retObj = (nome) => {
    const gmail = nome.replace(/\s+/g, '_').toLocaleLowerCase();
    const gmailFormated = `${gmail}@trybe.com`;
    const obj = {
        nomeCompleto: nome,
        email: gmailFormated,
    }
    return obj;
};
// console.log(retObj('Leonardo Guimarães Urci'));

const newEmployees = () => {
    const employees = {
        id1: retObj('Pedro Guerra'),
        id2: retObj('Luiza Drumond'),
        id3: retObj('Carla Paiva'),
    }
    return employees;
};
console.log(newEmployees());

console.log('----------------------- Atividade 2 -----------------------');

const randomGameNumber = () => Math.round(Math.random() * 5);
const luckyGame = (n) => n === randomGameNumber() ? 'Parabéns você ganhou' : 'tente novamente';
console.log(luckyGame(2));

console.log('----------------------- Atividade 3 -----------------------');

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (right, answers) => {
    if (right === answers) {
        return 1;
    };
    if (answers === 'N.A') {
        return 0;
    };
    if (right !== answers) {
        return -0.5;
    };
};

const howManyPoints = (rightAnswers, studentAnswers, verify) => {
    let points = 0;
    for (let i = 0; i < rightAnswers.length; i += 1) {
        const verifier = verify(rightAnswers[i], studentAnswers[i]);
        points += verifier;
    }
    if (points >= 5) {
        return `Parabéns, você está na média, e foi aprovado!! pontuação: ${points}`;
    };
    if (points < 5){
        return `Infelizmente você ficou abaixo da média nas notas, e foi reprovado. Pontuação: ${points}`
    };
    if (points === 10) {
        return `Parabéns, você é um aluno nota ${points}!! Tirou a nota máxima nesta prova!`
    }
}
console.log(howManyPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));