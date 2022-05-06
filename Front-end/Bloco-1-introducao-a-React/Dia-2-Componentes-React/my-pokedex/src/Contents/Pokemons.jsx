import { Component } from 'react';
import Data from './Data';
import './Pokemons.css';

const mapedPokemons = Data.map((x) => {
    const { id, name, image, type, averageWeight: { value, measurementUnit } } = x;
    return (
            <div key={id} className="theDad">
                <div className="inColumn">
                    <div>{name}</div>
                    <div>{type}</div>
                    <div>Average weight: {value} {measurementUnit}</div>
                </div>
                <div className="image">
                    <img src={image} alt={name} />
                </div>
            </div>
    )
})

class Pokemons extends Component {
    render() {
        return (
            <p>{mapedPokemons}</p>
        )
    }
}

export default Pokemons;