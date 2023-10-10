import { BasePokemon } from 'types';
import PokemonCard from '../pokemonCard/PokemonCard';
import './PokemonList.css';

interface PokemonListProps {
  pokemons: (BasePokemon & { types: string[] })[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <section className="pokemon-list">
      {pokemons?.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </section>
  );
};

export default PokemonList;
