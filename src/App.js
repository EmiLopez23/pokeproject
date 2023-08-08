import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import Wrapper from './components/Wrapper';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Wrapper/>}>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/pokemon/:id" element={<PokemonPage />} />
          <Route path="*" element={<Navigate to={"/"}/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
