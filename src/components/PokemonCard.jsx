import "../styles/PokemonCard.css"
export default function PokemonCard({pokemon}){
    return <article className="pokemon-card">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="pokemon-desc">
            <span className="pokemon-id">#{pokemon.id}</span>
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <div className="types">
                {pokemon.types.map(({type}, index) => <span key={index} className={`type-tag ${type.name}`}>{type.name}</span>)}
            </div>
        </div>
        
    </article>
}