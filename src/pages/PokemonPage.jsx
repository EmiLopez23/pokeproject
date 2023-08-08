import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonByIdWithEvolves } from "../utils/pokemonApi";
import { Box, LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import "../styles/PokemonPage.css"

export default function PokemonPage() {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getPokemonByIdWithEvolves(id).then((data) => { setPokemon(data); console.log(data) })
    }, [id])


    return pokemon &&
        <main>
            <section className="pokemon">
                <div className="left-side">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    <h1>{pokemon.name}</h1>
                    <div className="types">
                        {pokemon.types.map(({ type }, index) => <span key={index} className={`type-tag ${type.name}`}>{type.name} </span>)}
                    </div>
                    <div className="specs">
                        <div><h3>{pokemon.weight}</h3><p>Weight</p></div>
                        <div><h3>{pokemon.height}</h3><p>Height</p></div>
                        <div><h3>{pokemon.base_experience}</h3><p>Base Experience</p></div>
                    </div>
                </div>
                <Box sx={{ flexGrow: 1 }}>
                    <h3>Base Stats</h3>
                    {pokemon.stats.map((stat, index) => <section key={index} className="stat">
                        <div style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
                            <p>{stat.stat.name}</p>
                            <p>{stat.base_stat}</p>
                        </div>
                        <LinearProgress variant="determinate" value={stat.base_stat > 100 ? 100 : stat.base_stat} sx={{
                            height: 25,
                            borderRadius: 1,
                            [`&.${linearProgressClasses.colorPrimary}`]: { backgroundColor: "rgb(114, 114, 114)" },
                            [`& .${linearProgressClasses.bar}`]: { borderRadius: 1, backgroundColor: '#1e7ad0' }
                        }} />
                    </section>)}
                </Box>
            </section>
            <section className="evolutions">
                <h2>Evolutions</h2>
                <div className="evolution-chain">
                    {pokemon.evolutions.map((evolve, index) => <div key={index} className="evolution" onClick={()=>navigate(`/${evolve.id}`)}>
                        <img src={evolve.sprites?.other.dream_world.front_default} alt={evolve.name} />
                        <h4>{evolve.name}</h4>
                    </div>)}
                </div>
            </section>
        </main>



}