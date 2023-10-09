import { useNavigate } from 'react-router-dom';
import './Evolutions.css';
import { BasePokemon } from 'types';

interface EvolutionsProps {
  evolutions: BasePokemon[];
}

const Evolutions = ({ evolutions }: EvolutionsProps) => {
  const navigate = useNavigate();

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
