import { useState } from 'react';
import Filters from '../../components/filters/Filters';
import PokemonList from '../../components/pokemon_list/PokemonList';
import usePokemons from '../../hooks/usePokemons';
import InfiniteScroll from 'react-infinite-scroller';
import SkeletonCard from 'components/skeleton_card/SkeletonCard';
import Loader from 'components/loader/Loader';
import ScrollToTop from 'components/scroll_to_top/ScrollToTop';
import { POKEMON_QTY } from 'utils/cons';

const HomePage = () => {
  const [filters, setFilters] = useState({ name: '', type: '' });
  const { pokemons, loadMore, hasNext, loading } = usePokemons(filters);

  return (
    <main>
      <Filters filters={filters} setFilters={setFilters} />
      {pokemons.length ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasNext}
          loader={
            <div
              style={{ width: '100%', textAlign: 'center', marginTop: 10 }}
              key="infinite-scroll-loader"
            >
              <Loader size={50} color="black" />
            </div>
          }
        >
          <PokemonList pokemons={pokemons} />
        </InfiniteScroll>
      ) : (
        <section className="pokemon-list">
          {loading ? (
            new Array(POKEMON_QTY)
              .fill(1)
              .map((_, i) => <SkeletonCard key={i} />)
          ) : (
            <p>No Pokemons found</p>
          )}
        </section>
      )}
      <ScrollToTop />
    </main>
  );
};

export default HomePage;
