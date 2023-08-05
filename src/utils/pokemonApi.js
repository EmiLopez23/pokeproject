import axios from "axios";

const pokemonApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export async function  getAllPokemons(){
    const {data} = await pokemonApi.get("/pokemon?limit=5")
    const promiseArray = data.results.map(async (pokemon) => {
        const {data} = await axios.get(pokemon.url)
        return data
    })
    const pokemonData = await Promise.all(promiseArray)
    return {...data, results: pokemonData}
}

export async function getPokemons(limit=10, page){
    const {data} = await pokemonApi.get(`/pokemon?limit=${limit}&offset=${page*limit}`)
    return data
}