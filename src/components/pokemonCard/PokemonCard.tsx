import { useNavigate } from 'react-router-dom';
import './PokemonCard.css';
import { BasePokemon } from 'types';
import { flushSync } from 'react-dom';

interface PokemonCardProps {
  pokemon: BasePokemon & { types: string[] };
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(`/pokemon/${pokemon.id}`);
      });
    });
  };

  return (
    <article
      className="pokemon-card"
      onClick={handleClick}
      style={{ viewTransitionName: `pokemon-card-${pokemon.id}` }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />
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
