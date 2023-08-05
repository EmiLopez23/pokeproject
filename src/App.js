import './App.css';
import { getAllPokemons } from './utils/pokemonApi';
import PokemonCard from './components/PokemonCard';
import { useEffect, useState } from 'react';
import logo from './resources/pokemon_logo.png'
function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(()=>{
    getAllPokemons().then((data) => setPokemons(data))
  },[])

  
  return (
    <div className="App">
      <img src={logo} alt='pokemon logo' className='pokemon-logo'/>
      <div className='pokemon-list'>
      {pokemons?.results?.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
      </div>
    </div>
  );
}

export default App;
