import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import PokemonList from "../components/PokemonList";
import { getAllPokemons } from "../utils/pokemonApi";
import logo from '../resources/pokemon_logo.png'

export default function HomePage(){
    const [pokemons, setPokemons] = useState([])
    useEffect(()=>{
      getAllPokemons().then((data) => setPokemons(data))
    },[])
    return <>
    <header>
        <img src={logo} alt='pokemon logo' className='pokemon-logo'/>
      </header>
      <main>
        <Filters/>
        <PokemonList pokemons={pokemons}/>
      </main>
    </>
}