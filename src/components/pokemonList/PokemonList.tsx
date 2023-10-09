import PokemonCard from '../pokemonCard/PokemonCard';

export default function PokemonList({
  pokemons,
}: {
  pokemons: {
    sprites: { front_default: string };
    name: string;
    id: number;
    types: { type: { name: string } }[];
  }[];
}) {
  return (
    <section className="pokemon-list">
      {pokemons?.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </section>
  );
}
