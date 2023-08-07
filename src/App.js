import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import logo from './resources/pokemon_logo.png'

function App() {

  return (
    <div className="App">
      <header>
        <img src={logo} alt='pokemon logo' className='pokemon-logo'/>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="*" element={<Navigate to={"/"}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
