import { useNavigate } from 'react-router-dom';
import './PokemonCard.css';
import { BasePokemon } from 'types';

interface PokemonCardProps {
  pokemon: BasePokemon & { types: string[] };
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <article className="pokemon-card" onClick={handleClick}>
      <img src={pokemon.sprite} alt={pokemon.name} />
      <div className="pokemon-desc">
        <span className="pokemon-id">#{pokemon.id}</span>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <div className="types">
          {pokemon.types.map((type, index) => (
            <span key={index} className={`type-tag ${type}`}>
              {type}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PokemonCard;
