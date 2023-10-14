import { useNavigate } from 'react-router-dom';
import './PokemonCard.styles.css';
import { BasicPokemonInfo } from 'types';
import { SPRITE_URL } from 'utils/cons';

interface PokemonCardProps {
  pokemon: BasicPokemonInfo;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <article className="pokemon-card" onClick={handleClick}>
      <img src={SPRITE_URL + `${pokemon.id}.png`} alt={pokemon.name} />
      <div className="pokemon-desc">
        <span className="pokemon-id">#{pokemon.id}</span>
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <div className="types">
          {pokemon.types.map((type) => (
            <span key={type.id} className={`type-tag ${type.name}`}>
              {type.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PokemonCard;
