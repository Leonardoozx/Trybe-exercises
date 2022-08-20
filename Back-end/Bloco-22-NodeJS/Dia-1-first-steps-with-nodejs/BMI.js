const readline = require("readline-sync");

function calculateIMC(height, weight) {
  const IMC = weight / (height ** 2);
  return IMC;
}

const weight = readline.questionFloat('Qual o seu peso? ');
const height = readline.questionFloat('Qual a sua altura? ');
const IMC = (calculateIMC(height, weight));

console.log(`Seu IMC é: ${(IMC).toFixed(2)}`)
// Considere a seguinte tabela para classificar a situação do IMC:
// IMC	Situação
// Abaixo de 18,5	Abaixo do peso (magreza)
// Entre 18,5 e 24,9	Peso normal
// Entre 25,0 e 29,9	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9	Obesidade grau I
// Entre 35,0 e 39,9	Obesidade grau II

// 40,0 e acima	Obesidade graus III e IV
if (IMC < 18.5) console.log('Está abaixo do peso, estado de magreza');
if (IMC >= 18.5 && IMC <= 24.99) console.log('Seu peso está normal');
if (IMC >= 25 && IMC <= 29.99) console.log('Acima do peso, está no estado de sobrepeso');
if (IMC >= 30 && IMC <= 34.99) console.log('Você está no estado de obesidade grau I');
if (IMC >= 35 && IMC <= 39.99) console.log('Você está no estado de obesidade grau II');
if (IMC >= 40) console.log('Você está no estado de obesidade grau III');

module.exports = calculateIMC;