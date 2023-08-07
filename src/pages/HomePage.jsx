import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import PokemonList from "../components/PokemonList";
import { getAllPokemons } from "../utils/pokemonApi";

export default function HomePage(){
    const [pokemons, setPokemons] = useState([])
    useEffect(()=>{
      getAllPokemons().then((data) => setPokemons(data))
    },[])
    return <main>
        <Filters/>
        <PokemonList pokemons={pokemons}/>
      </main>
}