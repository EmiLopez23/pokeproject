import { useNavigate } from 'react-router-dom';
import './PokemonCard.css';
export default function PokemonCard({
  pokemon,
}: {
  pokemon: {
    sprites: { front_default: string };
    name: string;
    id: number;
    types: { type: { name: string } }[];
  };
}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/pokemon/${pokemon.id}`);
  }

  return (
    <article className="pokemon-card" onClick={handleClick}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="pokemon-desc">
        <span className="pokemon-id">#{pokemon.id}</span>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <div className="types">
          {pokemon.types.map(({ type }, index) => (
            <span key={index} className={`type-tag ${type.name}`}>
              {type.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
