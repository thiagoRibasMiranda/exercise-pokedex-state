import React from 'react';
import Pokemon from './Pokemon';
// import 

class Pokedex extends React.Component {
    constructor() {
        super();

        this.state = {
            n: 0,
        };

        this.cont = this.cont.bind(this)
    }

    cont () {
        if(this.state.n >= this.props.pokemons.length) {
            this.setState(({n}) => ({
                n: n * 0,
            }))
        } else {
            this.setState(({n}) => ({
                n: n + 1
            }))
        }
        
    }
    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                <Pokemon key={this.props.pokemons[this.state.n].id} pokemon={this.props.pokemons[this.state.n]}/>
                <button onClick={ this.cont }>Próximo pokémon</button>
            </div>
        );
    }
}

export default Pokedex;