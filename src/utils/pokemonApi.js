import axios from "axios";

const pokemonApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export async function  getAllPokemons(){
    const {data} = await pokemonApi.get("/pokemon?limit=500")
    const promiseArray = data.results.map(async (pokemon) => {
        const {data} = await axios.get(pokemon.url)
        return data
    })
    const pokemonData = await Promise.all(promiseArray)
    return {...data, results: pokemonData}
}

export async function getPokemons(limit=10, page=0){
    const {data} = await pokemonApi.get(`/pokemon?limit=${limit}&offset=${page*limit}`)
    const promiseArray = data.results.map(async (pokemon) => {
        const {data} = await axios.get(pokemon.url)
        return data
    })
    const pokemonData = await Promise.all(promiseArray)
    return {...data, results: pokemonData}
}

export async function getPokemonById(id){
    const {data} = await pokemonApi.get(`/pokemon/${id}`)
    return {...data}
}

export async function getPokemonByIdWithEvolves(id){
    const data = await getPokemonById(id)
    const {data: species} = await pokemonApi.get(data.species.url.split("v2")[1])
    const evolutionId = species.evolution_chain.url.split("/evolution-chain/")[1]
    const evolutions = await getEvolves(evolutionId)
    return {...data, evolutions}
}

export async function getEvolves(id){
    const {data} = await pokemonApi.get(`/evolution-chain/${id}`)
    let {evolves_to} = data.chain
    let evolutionChain = [{...data.chain.species, url: data.chain.species.url.split("/pokemon-species/")[1]}]
    while(evolves_to.length > 0){
        evolutionChain.push({...evolves_to[0].species, url: evolves_to[0].species.url.split("/pokemon-species/")[1]})
        evolves_to = evolves_to[0].evolves_to
    }
    const evolutionData = await Promise.all(evolutionChain.map(({url})=> getPokemonById(url)))
    return evolutionData
}

export async function getTypes(){
    const {data} = await pokemonApi.get(`/type`)
    const types = data.results.map((type) => type.name)
    return types
}