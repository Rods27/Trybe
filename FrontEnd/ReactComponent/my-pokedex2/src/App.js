import React from 'react';
import pokemons from './data'
import Pokedex from './Pokedex'
import './App.css'


class App extends React.Component{
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      pokemon : undefined
    }
  }

  handleClick({ target }) {
    this.setState( {pokemon: target.value} )
  }
  
  render () {
    return (
      <div className="container">
        <h1 className="central-text">Pokedex</h1>
        {pokemons.filter(pokemon => (pokemon.type === this.state.pokemon))
        .map(pokemon => <Pokedex name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image}/>)}
        {/* {pokemons.map(pokemon => <Pokedex name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image}/>)} */}
        <div className="filter-div">
          <button onClick={this.handleClick} value="All">All</button>
          <button onClick={this.handleClick} value="Electric">Electric</button>
          <button onClick={this.handleClick} value="Fire">Fire</button>
          <button onClick={this.handleClick} value="Bug">Bug</button>
          <button onClick={this.handleClick} value="Poison">Poison</button>
          <button onClick={this.handleClick} value="Psychic">Psychic</button>
          <button onClick={this.handleClick} value="Normal">Normal</button>
          <button onClick={this.handleClick} value="Dragon">Dragon</button>
        </div>
      </div>
    );
  }
}

export default App;
