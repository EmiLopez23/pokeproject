import { useState } from 'react';
import Filters from '../../components/filters/Filters';
import PokemonList from '../../components/pokemon_list/PokemonList';
import usePokemons from '../../hooks/usePokemons';
import InfiniteScroll from 'react-infinite-scroller';
import SkeletonCard from 'components/skeleton_card/SkeletonCard';
import Loader from 'components/loader/Loader';

const HomePage = () => {
  const { pokemons, loadMore } = usePokemons();
  const [filters, setFilters] = useState({ name: '', type: '' });
  const filteredPokemons = pokemons.filter((pokemon) =>
    filters.type
      ? pokemon.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        pokemon.types.includes(filters.type)
      : pokemon.name.toLowerCase().includes(filters.name.toLowerCase())
  );

  return (
    <main>
      <Filters filters={filters} setFilters={setFilters} />
      {pokemons.length ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={pokemons.length <= 1280}
          loader={
            <div style={{ width: '100%', textAlign: 'center', marginTop: 10 }}>
              <Loader size={50} color="black" />
            </div>
          }
        >
          <PokemonList pokemons={filteredPokemons} />
        </InfiniteScroll>
      ) : (
        <section className="pokemon-list">
          {new Array(10).fill(1).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </section>
      )}
    </main>
  );
};

export default HomePage;
