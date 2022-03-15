// Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
console.log('-------------------- Parte 1 -------------------- ');

console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'blue');

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

console.log(document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'Isso daqui, é muito legal de se aprender, estou fascinado, porém quero voltar a codar no meu projeto, gostaria de fazer 100% em tudo :)');

// Acesse o primeiroFilho a partir de pai .

console.log(document.querySelector('#pai').firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta 

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai .

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

// Parte 2

console.log('-------------------- Parte 2 -------------------- ');

// Crie um irmão para elementoOndeVoceEsta .

let irmaoDoElemento = document.querySelector('#pai');
let irmaoDoElementoCriado = document.createElement('irmaoElemento');

irmaoDoElemento.appendChild(irmaoDoElementoCriado);

// Crie um filho para elementoOndeVoceEsta .

let elementoOnde = document.querySelector('#elementoOndeVoceEsta');
let criaFilhoOnde = document.createElement('body');

elementoOnde.appendChild(criaFilhoOnde);

// Crie um filho para primeiroFilhoDoFilho .

let primeiroFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoFilho = document.createElement('div');

primeiroFilho.appendChild(filhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .

console.log(document.querySelector('div').parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling);

// Parte 3 

console.log('-------------------- Parte 3 -------------------- ');

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho

console.log(document.querySelector('#paiDoPai'));

const pai = document.querySelector('#pai');
const elementoOndePai = document.querySelector('#elementoOndeVoceEsta'); 
const excluido = document.getElementById('terceiroFilho');
const excluido2 = document.getElementById('quartoEUltimoFilho');
const excluido3 = document.getElementById('primeiroFilhoDoFilho');
const excluido4 = document.getElementById('segundoEUltimoFilhoDoFilho');
criaFilhoOnde.id = 'bodyDoElement'
const excluido5 = document.getElementById('bodyDoElement');
irmaoDoElementoCriado.id = 'irmaoQueVouExcluir'
const excluido6 = document.getElementById('irmaoQueVouExcluir');

pai.removeChild(excluido);
pai.removeChild(excluido2);
elementoOndePai.removeChild(excluido3);
elementoOndePai.removeChild(excluido4);
elementoOndePai.removeChild(excluido5);
pai.removeChild(excluido6);