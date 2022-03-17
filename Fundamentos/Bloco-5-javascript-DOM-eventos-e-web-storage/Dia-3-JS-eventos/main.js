const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
thirdLi.addEventListener('click', passaTech);
function passaTech() {
    thirdLi.className = 'tech';
    if (secondLi.classList = 'tech') {
        secondLi.classList.remove('tech');
    }
    if (firstLi.classList = 'tech') {
        firstLi.classList.remove('tech');
    }
}
secondLi.addEventListener('click', passaTech1);
function passaTech1() {
    secondLi.className = 'tech';
    if (thirdLi.classList = 'tech') {
        thirdLi.classList.remove('tech');
    }
    if (firstLi.classList = 'tech') {
        firstLi.classList.remove('tech');
    }
}
firstLi.addEventListener('click', passaTech2);
function passaTech2() {
    firstLi.className = 'tech';
    if (secondLi.classList = 'tech') {
        secondLi.classList.remove('tech');
    }
    if (thirdLi.classList = 'tech') {
        thirdLi.classList.remove('tech');
    }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function changeText() {
    if (firstLi.classList == 'tech') {
        firstLi.innerText = input.value;
    }
    if (secondLi.classList == 'tech') {
        secondLi.innerText = input.value;
    }
    if (thirdLi.classList == 'tech') {
        thirdLi.innerText = input.value;
    }
}
input.addEventListener('keyup', changeText);
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

let titulo = document.querySelector('#titulo');

function linkLeo() {
    window.location.href = "https://leonardoozx.github.io/";
}

titulo.addEventListener('dblclick', linkLeo);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor() {
    myWebpage.style.color = 'aqua';
}
function changeColor1() {
    myWebpage.style.color = 'green';
}
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseleave', changeColor1);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.