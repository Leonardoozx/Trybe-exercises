import Pokemons from './Contents/Pokemons';
import './Contents/AllThePokemons.css';

function App() {
  return (
    <div className="container">
      <h1>Pokedex</h1>
      <div className="pokedex"><Pokemons /></div>
    </div>
  );
}

export default App;
