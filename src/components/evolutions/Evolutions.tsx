import { useNavigate } from 'react-router-dom';
import './Evolutions.styles.css';
import { BasePokemon } from 'types';
import SkeletonImg from 'components/skeleton_img/SkeletonImg';

interface EvolutionsProps {
  evolutions: BasePokemon[];
}

const Evolutions = ({ evolutions }: EvolutionsProps) => {
  const navigate = useNavigate();

  if (!evolutions.length)
    return (
      <div className="evolution-chain">
        <SkeletonImg width={150} height={200} />
        <SkeletonImg width={150} height={200} />
        <SkeletonImg width={150} height={200} />
      </div>
    );

  return (
    <div className="evolution-chain">
      {evolutions.map((evolve, index) => (
        <div
          key={index}
          className="evolution"
          onClick={() => navigate(`/pokemon/${evolve.id}`)}
        >
          <img src={evolve.sprite} alt={evolve.name} />
          <h4>{evolve.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Evolutions;
