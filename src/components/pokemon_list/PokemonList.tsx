import { BasicPokemonInfo } from 'types';
import PokemonCard from '../pokemon_card/PokemonCard';
import './PokemonList.styles.css';

interface PokemonListProps {
  pokemons: BasicPokemonInfo[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <section className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </section>
  );
};

export default PokemonList;
