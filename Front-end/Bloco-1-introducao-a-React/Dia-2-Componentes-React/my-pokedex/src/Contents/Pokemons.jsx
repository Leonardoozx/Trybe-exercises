import { Component } from 'react';
import './Pokemons.css';

class Pokemons extends Component {
    render() {
        const { id, name, image, type, averageWeight: { value, measurementUnit } } = this.props.pokemons;
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
    }
}

export default Pokemons;