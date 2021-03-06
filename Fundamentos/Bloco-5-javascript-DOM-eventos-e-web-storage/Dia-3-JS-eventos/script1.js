function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();

function criaDias() {
    const dezDayList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const diasMes = document.querySelector('#days');

    for (let i = 0; i < dezDayList.length; i += 1) {
        const dias = dezDayList[i];
        const listaDeDias = document.createElement('li');
        listaDeDias.innerText = dias;
        listaDeDias.className = 'day';

        diasMes.appendChild(listaDeDias);
        if (dias == '24' || dias == '25' || dias == '31') {
            listaDeDias.classList.add('holiday');
        }
        if (dias == '4' || dias == '11' || dias == '18' || dias == '25') {
            listaDeDias.classList.add('friday');
        }
    }
}
criaDias();

let btnContainer = document.querySelector('.buttons-container');
let botao = document.createElement('button');
function criaBtnFeriados() {
    botao.innerText = 'Feriados';
    btnContainer.appendChild(botao);
    botao.id = 'btn-holiday';
}
criaBtnFeriados();

function changeColor2() {
    let holidays = document.getElementsByClassName('holiday');
    for (let i = 0; i < holidays.length; i += 1) {
        let feriados = holidays[i];
        feriados.style.backgroundColor = 'orange';
    }
}
const btn = document.getElementById('btn-holiday');
btn.addEventListener('click', changeColor2);

let botaoFri = document.createElement('button');
function criaBtnFridays() {
    botaoFri.innerText = 'Sexta-feira';
    btnContainer.appendChild(botaoFri);
    botaoFri.id = 'btn-friday';
}
criaBtnFridays();

function fridayBtn() {
    let fridays = document.getElementsByClassName('friday');
    for (let i = 0; i < fridays.length; i += 1) {
        let sexta = fridays[i];
        sexta.innerText = 'SEXTA-FEIRA';
    }
}
const btnFri = document.getElementById('btn-friday');
btnFri.addEventListener('click', fridayBtn);

function zoom() {
    let dias = document.getElementsByClassName('days');
    for (let i = 0; i < dias.length; i += 1) {
        let diasDaSemana = dias[i];
    }
}