import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonPage.styles.css';
import BaseStats from '../../components/base_stats/BaseStats';
import BasicInfo from '../../components/basic_info/BasicInfo';
import Evolutions from '../../components/evolutions/Evolutions';
import { getPokemonById } from 'utils/pokemonApi';
import { Pokemon } from 'types';
import LoadingScreen from 'components/loading_screen/LoadingScreen';

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    getPokemonById(Number(id)).then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <LoadingScreen />;

  return (
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
  );
};

export default PokemonPage;
