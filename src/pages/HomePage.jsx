import Filters from "../components/Filters";
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons"

export default function HomePage(){
  const {pokemons,filter} = usePokemons()

    return <main>
        <Filters filter={filter}/>
        <PokemonList pokemons={pokemons}/>
      </main>
}