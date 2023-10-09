import { useEffect, useState } from 'react';
import { getPokemons } from '../utils/pokemonApi';

const POKEMON_QTY = 50;

export default function usePokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons(10, 0).then((data) => {
      console.log(data);
    });
  }, []);

  //function filter(filters) {
  //  if (filters.name === '') filterPokemons(filters.type);
  //  else if (filters.type === '') searchPokemon(filters.name);
  //  else
  //    getPokemons(POKEMON_QTY).then((data) =>
  //      setPokemons(
  //        data.results.filter(
  //          (pokemon) =>
  //            pokemon.types.some(
  //              (pokemonType) => pokemonType.type.name === filters.type
  //            ) === true &&
  //            pokemon.name
  //              .toLowerCase()
  //              .includes(filters.name.toLowerCase()) === true
  //        )
  //      )
  //    );
  //}
  //
  //function filterPokemons(type) {
  //  if (type === '')
  //    getPokemons(POKEMON_QTY).then((data) => setPokemons(data.results));
  //  else
  //    getPokemons(POKEMON_QTY).then((data) =>
  //      setPokemons(
  //        data.results.filter(
  //          (pokemon) =>
  //            pokemon.types.some(
  //              (pokemonType) => pokemonType.type.name === type
  //            ) === true
  //        )
  //      )
  //    );
  //}
  //
  //function searchPokemon(name) {
  //  if (name === '')
  //    getPokemons(POKEMON_QTY).then((data) => setPokemons(data.results));
  //  else
  //    getPokemons(POKEMON_QTY).then((data) =>
  //      setPokemons(
  //        data.results.filter(
  //          (pokemon) =>
  //            pokemon.name.toLowerCase().includes(name.toLowerCase()) === true
  //        )
  //      )
  //    );
  //}

  function filter(filter: { name: ' '; type: ' ' }): void {
    console.log(filter);
  }

  return { pokemons, filter };
}
