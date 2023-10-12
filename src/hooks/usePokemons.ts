import { useEffect, useState } from 'react';
import { getPokemons } from '../utils/pokemonApi';
import { BasePokemon } from 'types';

const POKEMON_QTY = 10;

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<
    (BasePokemon & { types: string[] })[]
  >([]);

  useEffect(() => {
    getPokemons(POKEMON_QTY, 0).then((data) => {
      setPokemons(data);
    });
  }, []);

  const loadMore = (page: number) => {
    getPokemons(POKEMON_QTY, page).then((data) => {
      setPokemons((prevState) => [...prevState, ...data]);
    });
  };

  return { pokemons, loadMore };
};

export default usePokemons;
