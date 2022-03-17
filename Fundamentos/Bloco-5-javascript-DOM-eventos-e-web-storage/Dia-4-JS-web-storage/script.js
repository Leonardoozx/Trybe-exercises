const body = document.querySelector('body');
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

function trocaCor() {
    body.style.backgroundColor = corPag.value;
    if (corPag.value == 'blue') {
        body.style.color = 'white';
    }
    if (corPag.value == 'black') {
        body.style.color = 'white';
    }
    if (corPag.value == '') {
        body.style.color = 'black';
    }
    if (corPag.value == 'aqua') {
        body.style.color = 'black';
    }
}
corPag.addEventListener('keyup', trocaCor);

function espacaLinhas() {
    body.style.lineHeight = espacoLinha.value;
}
espacoLinha.addEventListener('keyup', espacaLinhas);

function tamanhoLetra() {
    body.style.fontSize = letras.value + 'px';
    if (letras.value <= 16) {
    body.style.fontSize = '16px';
    }
}
letras.addEventListener('keyup', tamanhoLetra);

function fonteLetras() {
    body.style.fontFamily = fonte.value;
}
fonte.addEventListener('keyup', fonteLetras);