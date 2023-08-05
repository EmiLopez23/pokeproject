import { Chip } from "@mui/material";
import { colors } from "../resources/colors";

export default function PokemonCard({pokemon}){
    return <article className="pokemon-card">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <span className="pokemon-id">{pokemon.id}</span>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <div className="types">
            {pokemon.types.map(({type}, index) => <Chip key={index} sx={{backgroundColor:colors[type.name]}} label={type.name}/>)}
        </div>
    </article>
}