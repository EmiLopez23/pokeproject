import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { getPokemonByIdWithEvolves } from '../../utils/pokemonApi';
import './PokemonPage.css';
import BaseStats from '../../components/baseStats/BaseStats';
import BasicInfo from '../../components/basicInfo/BasicInfo';
import Evolutions from '../../components/evolutions/Evolutions';

export default function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({
    sprites: { front_default: '' },
    name: '',
    types: [{ type: { name: '' } }],
    weight: 0,
    height: 0,
    base_experience: 0,
    evolutions: [{ sprites: { front_default: '' }, name: '', id: 0 }],
    stats: [{ stat: { name: '' }, base_stat: 0 }],
  });

  //useEffect(() => {
  //  getPokemonByIdWithEvolves(id)
  //    .then((data) => {
  //      setPokemon(data);
  //    })
  //    .catch((err) => console.log(err));
  //}, [id]);

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
}
