import { useEffect , useState} from "react";
import { getAllPokemons, getPokemons } from "../utils/pokemonApi";

export default function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        getPokemons().then((data) => {setPokemons(data.results)})
    },[])

    function nextPage(page){
        getPokemons(10, page).then((data) => {setPokemons(data.results)})
    }

    function prevPage(page){
        getPokemons(10, page).then((data) => setPokemons(data.results))
    }

    function filterPokemons(type){
        if(type === '') getPokemons().then((data) => setPokemons(data.results))
        else getPokemons().then(data => setPokemons(data.results.filter((pokemon) => pokemon.types.some((pokemonType)=>pokemonType.type.name === type) === true)))  
    }


    return {pokemons,nextPage,prevPage,filterPokemons}
}
