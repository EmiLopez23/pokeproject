import { Pokemon } from 'types';
import './BasicInfo.styles.css';
import SkeletonImg from 'components/skeleton_img/SkeletonImg';
import SkeletonTitle from 'components/skeleton_title/SkeletonTitle';
import SkeletonTag from 'components/skeleton_tag/SkeletonTag';
import { SPRITE_URL } from 'utils/cons';

interface BasicInfoProps {
  pokemon: Omit<Pokemon, 'stats'>;
}

const BasicInfo = ({ pokemon }: BasicInfoProps) => {
  if (pokemon.name === '')
    return (
      <div className="basic-info">
        <SkeletonImg width={220} height={220} />
        <SkeletonTitle width={190} height={40} />
        <div className="types">
          <SkeletonTag width={130} height={40} />
          <SkeletonTag width={130} height={40} />
        </div>
        <div className="specs">
          <SkeletonTag width={50} height={20} />
          <SkeletonTag width={50} height={20} />
          <SkeletonTag width={50} height={20} />
        </div>
      </div>
    );

  return (
    <div className="basic-info">
      <img src={SPRITE_URL + `${pokemon.id}.png`} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <div className="types">
        {pokemon.types.map((type) => (
          <span key={type.id} className={`type-tag ${type.name}`}>
            {type.name}
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
