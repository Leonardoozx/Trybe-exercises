const corpo = document.querySelector('body');
const corPag = document.getElementById('cor');
corPag.style.width = '130px';
corPag.style.textAlign = 'center';
const espacoLinha = document.getElementById('espaçoLinha');
espacoLinha.style.width = '200px';
espacoLinha.style.textAlign = 'center';
espacoLinha.style.marginLeft = '20px';
const letras = document.getElementById('letras');
letras.style.marginLeft = '20px'
letras.style.textAlign = 'center'
letras.style.width = '180px'
const fonte = document.getElementById('fonte');
fonte.style.marginLeft = '20px'
fonte.style.textAlign = 'center'
fonte.style.width = '180px'
const todosInputs = document.getElementById('todosInputs');
todosInputs.style.textAlign = 'center'
let retorna = document.getElementById('retorna');
retorna.style.float = 'left';

function trocaCor() {
    corpo.style.backgroundColor = corPag.value;
    if (corPag.value == 'blue') {
        corpo.style.color = 'white';
    }
    if (corPag.value == 'black') {
        corpo.style.color = 'white';
    }
    if (corPag.value == '') {
        corpo.style.color = 'black';
    }
    if (corPag.value == 'aqua') {
        corpo.style.color = 'black';
    }
    localStorage.setItem('fundo', corPag.value);
}
corPag.addEventListener('keyup', trocaCor);

function espacaLinhas() {
    corpo.style.lineHeight = espacoLinha.value;
    localStorage.setItem('espacoLinhas', espacoLinha.value);
}
espacoLinha.addEventListener('keyup', espacaLinhas);

function tamanhoLetra() {
    corpo.style.fontSize = letras.value + 'px';
    if (letras.value < 17) {
        corpo.style.fontSize = '16px';
    }
    localStorage.setItem('tamanhoLetras', letras.value);
}
letras.addEventListener('keyup', tamanhoLetra);

function fonteLetras() {
    corpo.style.fontFamily = fonte.value;
    localStorage.setItem('fonteLetras', fonte.value);
}
fonte.addEventListener('keyup', fonteLetras);

function backSettings() {
    let letraFonte = localStorage.getItem('fonteLetras');
    corpo.style.fontFamily = letraFonte;

    let linhaEspaco = localStorage.getItem('espacoLinhas');
    corpo.style.lineHeight = linhaEspaco;

    let fundoCor = localStorage.getItem('fundo');
    corpo.style.backgroundColor = fundoCor;
    
    let words = localStorage.getItem('tamanhoLetras');
    corpo.style.fontSize = words + 'px';
    
    if (fundoCor == 'black') {
        corpo.style.color = 'white';
    }
}
retorna.addEventListener('click', backSettings);