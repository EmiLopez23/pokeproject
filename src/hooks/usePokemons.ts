import { useEffect, useState } from 'react';
import { getPokemons } from '../utils/pokemonApi';
import { BasicPokemonInfo } from 'types';
import { POKEMON_QTY } from 'utils/cons';

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<BasicPokemonInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPokemons(POKEMON_QTY, 0)
      .then((data) => {
        if (!data.length) setHasNext(false);
        setPokemons(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const loadMore = (page: number) => {
    setLoading(true);
    getPokemons(POKEMON_QTY, page)
      .then((data) => {
        if (!data.length) setHasNext(false);
        setPokemons((prevState) => [...prevState, ...data]);
      })
      .finally(() => setLoading(false));
  };

  return { pokemons, loadMore, loading, hasNext };
};

export default usePokemons;
