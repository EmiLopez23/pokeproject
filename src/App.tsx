import './App.css';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import PokemonPage from './pages/pokemonPage/PokemonPage';
import Wrapper from './components/wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Wrapper />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<PokemonPage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
