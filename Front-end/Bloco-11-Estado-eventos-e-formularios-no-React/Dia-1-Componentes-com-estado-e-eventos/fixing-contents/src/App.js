import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      firstBtn: 0,
      secondBtn: 0,
      thirdBtn: 0,
      // numeroDeCliques: 0
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.secondHandleClick = this.secondHandleClick.bind(this);
    // this.thirdHandleClick = this.thirdHandleClick.bind(this);
    // this.countFirstBtn = this.countFirstBtn.bind(this);
    // this.countSecondBtn = this.countSecondBtn.bind(this);
    // this.countThirdBtn = this.countThirdBtn.bind(this);
    // style = this.;
  }

  // handleClick = () => {
  //   /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
  //   ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
  //   React*/
  //   this.setState((estadoAnterior, _props) => ({
  //     numeroDeCliques: estadoAnterior.numeroDeCliques + 1
  //   }));
  // };

  // secondHandleClick = () => {
  //   this.setState((estadoAnterior, _props) => ({
  //     numeroDeCliques: estadoAnterior.numeroDeCliques + 5
  //   }));
  // };

  // thirdHandleClick = () => {
  //   this.setState((estadoAnterior, _props) => ({
  //     numeroDeCliques: estadoAnterior.numeroDeCliques + 10
  //   }));
  // };

  countFirstBtn = () => {
    this.setState((estadoAnterior, _props) => ({
      firstBtn: estadoAnterior.firstBtn + 1
    }));
    console.log(`FirstBtn = ${this.ifItsEven(this.state.firstBtn)}`);
  };

  countSecondBtn = () => {
    this.setState((estadoAnterior, _props) => ({
      secondBtn: estadoAnterior.secondBtn + 1
    }));
    console.log(`SecondBtn = ${this.ifItsEven(this.state.secondBtn)}`);
  };

  countThirdBtn = () => {
    this.setState((estadoAnterior, _props) => ({
      thirdBtn: estadoAnterior.thirdBtn + 1
    }))
    console.log(`ThirdBtn = ${this.ifItsEven(this.state.thirdBtn)}`);
  }

  ifItsEven = (n) => n % 2 === 0 ? 'green' : 'blue';

render() {
  /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
  return <div>
    {/* <button onClick={this.handleClick}>Clique para somar 1 ao número abaixo</button> */}
    {/* <button onClick={this.secondHandleClick}>Clique para somar 5 ao número abaixo </button> */}
    {/* <button onClick={this.thirdHandleClick}>Clique para somar 10 ao número abaixo </button> */}
    {/* <p>{this.state.numeroDeCliques}</p> */}

    {/* console.log(thirdBtn) */}

    {/* Parar contar a quantidade de click em cada botão */}
    <div>SEMPRE QUE FOR PAR A COR DA LETRA FICA VERDE</div>
    <div>SEMPRE QUE FOR IMPAR A COR DA LETRA FICA VERMELHA</div>
    <button onClick={this.countFirstBtn}>Botão 1</button>
    <div style={{color: this.ifItsEven(this.state.firstBtn)}}>Você clicou {this.state.firstBtn} vez(ez) no primeiro botão</div>
    <br></br>
    <button onClick={this.countSecondBtn}>Botão 2</button>
    <div style={{color: this.ifItsEven(this.state.secondBtn)}}>Você clicou {this.state.secondBtn} vez(ez) no segundo botão</div>
    <br></br>
    <button onClick={this.countThirdBtn}>Botão 3</button>
    <div style={{color: this.ifItsEven(this.state.thirdBtn)}}>Você clicou {this.state.thirdBtn} vez(ez) no terceiro botão</div>
  </div>
}
}

export default App;