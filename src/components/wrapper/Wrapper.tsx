import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../resources/pokemon_logo.png';

const Wrapper = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <img
          src={logo}
          alt="pokemon logo"
          onClick={() => navigate('/')}
          className="pokemon-logo"
        />
      </header>
      <Outlet />
    </>
  );
};

export default Wrapper;
