// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false 

const currentHour = 7;
let message;

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour <= 14) {
    message = "Hora do almoço!!!"
}
else {
    message = "Hmmm, cheiro de café recém passado"
}

console.log(message);

// outra atividade de operadores lógicos

let weekDay = 'quarta-feira';

if (weekDay = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira']) {
    console.log('Eba, mais um dia de aprendizado!');
}
else {
    console.log('FINALMENTE, descanso merecido');
}