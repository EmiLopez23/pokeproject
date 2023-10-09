import Filters from '../../components/filters/Filters';
import PokemonList from '../../components/pokemonList/PokemonList';
import usePokemons from '../../hooks/usePokemons';

const HomePage = () => {
  const { pokemons, filter } = usePokemons();

  return (
    <main>
      <Filters filter={filter} />
      <PokemonList pokemons={pokemons} />
    </main>
  );
};

export default HomePage;
