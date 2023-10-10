import { Pokemon } from 'types';
import './BasicInfo.css';

interface BasicInfoProps {
  pokemon: Omit<Pokemon, 'stats'>;
}

const BasicInfo = ({ pokemon }: BasicInfoProps) => {
  return (
    <div className="basic-info">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      <h1>{pokemon.name}</h1>
      <div className="types">
        {pokemon.types.map((type, index) => (
          <span key={index} className={`type-tag ${type}`}>
            {type}
          </span>
        ))}
      </div>
      <div className="specs">
        <div>
          <h3>{pokemon.weight}</h3>
          <p>Weight</p>
        </div>
        <div>
          <h3>{pokemon.height}</h3>
          <p>Height</p>
        </div>
        <div>
          <h3>{pokemon.base_experience}</h3>
          <p>Base Experience</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
