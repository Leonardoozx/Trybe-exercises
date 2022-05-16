import { Component } from 'react';
import './Card.css'

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    }, {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo'
    }, {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    }, {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

const mapedContents = conteudos.map((x) => {
    return <div>
        <li className="creatingCard">
            O conteúdo é: {x.conteudo}
            <div>Status: {x.status}</div>
            <div>Bloco: {x.bloco}</div>
        </li>
        <br />
    </div>
});

class Content extends Component {
    render() {
        return (
            <ol>{mapedContents}</ol>
        )
    }
}

export default Content;
