import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:id" element={<PokemonPage />} />
          <Route path="*" element={<Navigate to={"/"}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
