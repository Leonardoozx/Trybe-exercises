import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.data;
        return (
            <div key={name} className="pokemon">
                <div>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${JSON.parse(value)} ${measurementUnit}`}</p>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;