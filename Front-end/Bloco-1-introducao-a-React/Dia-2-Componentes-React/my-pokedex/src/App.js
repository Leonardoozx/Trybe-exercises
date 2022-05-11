import Pokemons from './Contents/Pokemons';
import './Contents/AllThePokemons.css';
import Data from './Contents/Data'

function App() {
  return (
    <div className="container">
      <h1>Pokedex</h1>

      <div className="pokedex"><Pokemons pokemon={Data}/></div>
    </div>
  );
}

export default App;
