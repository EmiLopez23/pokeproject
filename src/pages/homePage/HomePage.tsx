import Filters from '../../components/filters/Filters';
import PokemonList from '../../components/pokemonList/PokemonList';
import usePokemons from '../../hooks/usePokemons';

export default function HomePage() {
  const { pokemons, filter } = usePokemons();

  return (
    <main>
      <Filters filter={filter} />
      <PokemonList pokemons={pokemons} />
    </main>
  );
}
