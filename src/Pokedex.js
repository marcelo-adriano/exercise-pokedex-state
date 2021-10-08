import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {

        const { pokemon } = this.props;
        
        return (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
        );
    }
}

export default Pokedex;
