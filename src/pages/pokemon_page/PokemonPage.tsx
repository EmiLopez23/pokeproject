import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonPage.styles.css';
import BaseStats from '../../components/base_stats/BaseStats';
import BasicInfo from '../../components/basic_info/BasicInfo';
import Evolutions from '../../components/evolutions/Evolutions';
import { getPokemonById } from 'utils/pokemonApi';
import { Pokemon } from 'types';

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>({
    id: 0,
    sprite: '',
    name: '',
    types: [],
    weight: 0,
    height: 0,
    base_experience: 0,
    evolutions: [],
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
    <main>
      <section
        className="pokemon"
        style={{ viewTransitionName: `pokemon-card-${id}` }}
      >
        <BasicInfo pokemon={pokemon} />
        <BaseStats stats={pokemon.stats} />
      </section>
      <section className="evolutions">
        <h2>Evolutions</h2>
        <Evolutions evolutions={pokemon.evolutions} />
      </section>
    </main>
  );
};

export default PokemonPage;
