import { useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonPage() {
    const {id} = useParams()
    const [pokemon, setPokemon] = useState(null)

    

}