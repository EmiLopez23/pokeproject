import { useEffect , useState} from "react";
import {  getPokemons } from "../utils/pokemonApi";

export default function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        getPokemons(100).then((data) => {setPokemons(data.results)})
    },[])

    function nextPage(page){
        getPokemons(10, page).then((data) => {setPokemons(prev=>[...prev,...data.results])})
    }

    function filter(filters){
        if(filters.name === '') filterPokemons(filters.type)
        else if(filters.type === '') searchPokemon(filters.name)
        else getPokemons(100).then(data => setPokemons(data.results.filter((pokemon) => pokemon.types.some((pokemonType)=>pokemonType.type.name === filters.type) === true && pokemon.name.toLowerCase().includes(filters.name.toLowerCase()) === true)))
    }

    function filterPokemons(type){
        if(type === '') getPokemons(100).then((data) => setPokemons(data.results))
        else getPokemons(100).then(data => setPokemons(data.results.filter((pokemon) => pokemon.types.some((pokemonType)=>pokemonType.type.name === type) === true)))  
    }

    function searchPokemon(name){
        if(name === '') getPokemons(100).then((data) => setPokemons(data.results))
        else getPokemons(100).then(data => setPokemons(data.results.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()) === true)))
    }


    return {pokemons,nextPage,filter}
}
