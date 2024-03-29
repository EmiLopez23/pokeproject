import PokemonCard from "./PokemonCard";

export default function PokemonList({pokemons}){
    
    return <section className='pokemon-list'>
    {pokemons?.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
    </section>
}