import React from 'react';
import pokemons from './data'
import Pokedex from './Pokedex'
import './App.css'


class App extends React.Component{
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      pokemon : ""
    }
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      pokemon: pokemons.filter(pokemon => pokemon.type === 'Fire')[0]
    }))
    console.log(this.state)
  }

  render () {
    console.log(this.state)
    return (
      <div className="container">
        <h1 className="central-text">Pokedex</h1>
        {pokemons.map(pokemon => <Pokedex name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image}/>)}
        <div className="filter-div">
          <button onClick={this.handleClick}>Fire</button>
        </div>
      </div>
    );
  }
}

export default App;
