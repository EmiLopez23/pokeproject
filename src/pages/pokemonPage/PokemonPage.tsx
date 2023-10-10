import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonPage.css';
import BaseStats from '../../components/baseStats/BaseStats';
import BasicInfo from '../../components/basicInfo/BasicInfo';
import Evolutions from '../../components/evolutions/Evolutions';
import { getPokemonById } from 'utils/pokemonApi';

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({
    sprite: '',
    name: '',
    types: [''],
    weight: 0,
    height: 0,
    base_experience: 0,
    evolutions: [{ sprite: '', name: '', id: 0 }],
    stats: [
      { name: '', value: 0 },
      { name: '', value: 0 },
      { name: '', value: 0 },
      { name: '', value: 0 },
      { name: '', value: 0 },
      { name: '', value: 0 },
    ], //six objects, each for a single stat mainly for the animation
  });

  useEffect(() => {
    getPokemonById(Number(id)).then((data) => setPokemon(data));
  }, [id]);

  return (
    pokemon && (
      <main>
        <section className="pokemon">
          <BasicInfo pokemon={pokemon} />
          <BaseStats stats={pokemon.stats} />
        </section>
        <section className="evolutions">
          <h2>Evolutions</h2>
          <Evolutions evolutions={pokemon.evolutions} />
        </section>
      </main>
    )
  );
};

export default PokemonPage;
