import "../styles/BasicInfo.css"

export default function BasicInfo({ pokemon }) {

    return <div className="basic-info">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
        <div className="types">
            {pokemon.types.map(({ type }, index) => <span key={index} className={`type-tag ${type.name}`}>{type.name} </span>)}
        </div>
        <div className="specs">
            <div>
                <h3>{pokemon.weight}</h3><p>Weight</p>
            </div>
            <div>
                <h3>{pokemon.height}</h3><p>Height</p>
            </div>
            <div>
                <h3>{pokemon.base_experience}</h3>
                <p>Base Experience</p>
            </div>
        </div>
    </div>
}