import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByIdWithEvolves } from "../utils/pokemonApi";
import "../styles/PokemonPage.css"
import BaseStats from "../components/BaseStats";
import BasicInfo from "../components/BasicInfo";
import Evolutions from "../components/Evolutions";

export default function PokemonPage() {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        getPokemonByIdWithEvolves(id)
        .then((data) => { setPokemon(data) })
        .catch(err=>console.log(err))
    }, [id])


    return pokemon &&
        <main>
            <section className="pokemon">
                <BasicInfo pokemon={pokemon} />
                <BaseStats stats={pokemon.stats} />
            </section>
            <section className="evolutions">
                <h2>Evolutions</h2>
                <Evolutions evolutions={pokemon.evolutions} />
            </section>
        </main>



}