import Filters from "../components/Filters";
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons"

export default function HomePage(){
  const {pokemons,filterPokemons} = usePokemons()

    return <main>
        <Filters filterPokemons={filterPokemons}/>
        <PokemonList pokemons={pokemons}/>
      </main>
}