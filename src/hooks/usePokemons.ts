import { useEffect, useState } from 'react';
import { getPokemons } from '../utils/pokemonApi';
import { BasicPokemonInfo, Filter } from 'types';
import { POKEMON_QTY } from 'utils/cons';

const usePokemons = (filters: Filter) => {
  const [pokemons, setPokemons] = useState<BasicPokemonInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    setHasNext(true); //everytime filters change, reset hasNext
    setLoading(true);
    getPokemons(POKEMON_QTY, 0, filters.name, filters.type)
      .then((data) => {
        if (!data.length) setHasNext(false);
        setPokemons(data);
      })
      .finally(() => setLoading(false));
  }, [filters]);

  const loadMore = (page: number) => {
    setLoading(true);
    getPokemons(POKEMON_QTY, page, filters.name, filters.type)
      .then((data) => {
        if (!data.length) setHasNext(false);
        setPokemons((prevState) => [...prevState, ...data]);
      })
      .finally(() => setLoading(false));
  };

  return { pokemons, loadMore, loading, hasNext };
};

export default usePokemons;
