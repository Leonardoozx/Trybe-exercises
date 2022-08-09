import React from 'react';
import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';
// import Pokedex from './Pokedex';

class App extends React.Component {

  // handleFire = () => {
  //   const firePokemons = pokemons.filter((x) => x.type.includes);
  // };

  state = {
    pokemonAtual: 0,
    pokemonsType: pokemons,  
  };

  changePokemon = () => {
    this.setState((pokemonAntigo) => ({
      pokemonAtual: pokemonAntigo.pokemonAtual + 1,
    }));
    if (this.state.pokemonAtual === (pokemons.length - 1) || this.state.pokemonAtual === (this.state.pokemonsType.length - 1)) {
      this.setState({
        pokemonAtual: 0,
      });
    }
    return this.state.pokemonAtual;
  };

  firePokemons = () => {
    const fireFiltered = pokemons.filter((x) => x.type === 'Fire');
    this.setState({
      pokemonAtual: 0,
      pokemonsType: [...fireFiltered],
    });
    return this.state.pokemonsType;
  };

  pysychicPokemons = () => {
    const psychicFiltered = pokemons.filter((x) => x.type === 'Psychic');
    this.setState({
      pokemonAtual: 0,
      pokemonsType: [...psychicFiltered],
    });
    return this.state.pokemonsType;
  };

  allPokemons = () => {
    this.setState({
      pokemonsType: pokemons,
    });
    return this.state.pokemonsType;
  };

  render() {
    
    const { pokemonsType } = this.state;

    return (
      <div className="App">
        <div>
          <h2>Pokemons</h2>
            <Pokemon data={pokemonsType[this.state.pokemonAtual]}/> 

          </div>
        <button className='next-btn' onClick={this.changePokemon}>Next Pokemon</button>
        <h1> Pokedex </h1>
        <button onClick={this.pysychicPokemons}>Psychic Pokemons</button>
        <button onClick={this.allPokemons}>All Pokemons</button>
        <button onClick={this.firePokemons}>Fire Pokemons</button>
        {pokemonsType.map((x) => <Pokemon data={x}/>)}
      </div>
    );
  }
}

export default App;