import React from "react";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";
import Button from "./Button";
import ButtonsTypes from "./ButtonsTypes"

class App extends React.Component {
  constructor() {
    super();
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.state = {
      arrayPokemon: pokemons,
      tamanho: pokemons.length - 1,
      index: 0,
      uniqueTypes: pokemons.map((type) => type.type).filter((v, i, a) => a.indexOf(v) === i),
    };
  }

  nextPokemon() {
    this.setState((previous, _props) => ({
      index: previous.index === previous.tamanho ? 0 : previous.index + 1,
    }))
  }

  filterPokemon(tipo) {
    const novoArrayPokemon = pokemons.filter((pokemon) => pokemon.type === tipo);
    this.setState({
      arrayPokemon: novoArrayPokemon,
      tamanho: novoArrayPokemon.length - 1,
      index: 0,
    });
  }

  render() {
    const { arrayPokemon, index, uniqueTypes } = this.state;
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={ arrayPokemon[index] } />
        <ButtonsTypes funcao={ this.filterPokemon } types={ uniqueTypes } />
        <Button funcao={ this.nextPokemon } texto='next' />
      </div>
    );
  }
}

export default App;
