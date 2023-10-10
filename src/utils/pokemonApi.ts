//import axios from 'axios';
import { BasePokemon, Pokemon } from 'types';
import client from './apolloClient';
import { gql } from '@apollo/client';

type PokemonFromAPI = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: string;
    };
  }[];
  pokemon_v2_pokemonspecy: {
    pokemon_v2_evolutionchain: {
      pokemon_v2_pokemonspecies: {
        name: string;
        id: number;
      }[];
    };
  };
  pokemon_v2_pokemonstats: {
    base_stat: number;
    pokemon_v2_stat: {
      name: string;
    };
  }[];
};

const getPokemons = async (
  limit = 10,
  page = 0
): Promise<(BasePokemon & { types: string[] })[]> => {
  const {
    data: { pokemon_v2_pokemon },
  } = await client.query({
    query: gql`
      query getPokemonList {
        pokemon_v2_pokemon(limit: ${limit}, offset: ${page * limit}) {
          id
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    `,
  });

  return pokemon_v2_pokemon.map((pokemon: PokemonFromAPI) => {
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    const types = pokemon.pokemon_v2_pokemontypes?.map(
      (type) => type.pokemon_v2_type.name
    );
    return { id: pokemon.id, name: pokemon.name, sprite, types };
  });
};

const getPokemonById = async (pokemonId: number): Promise<Pokemon> => {
  const {
    data: { pokemon_v2_pokemon },
  } = await client.query({
    query: gql`
    query getPokemon {
      pokemon_v2_pokemon(where: {id: {_eq: ${pokemonId}}}) {
        base_experience
        height
        weight
        id
        name
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
        pokemon_v2_pokemonspecy {
          pokemon_v2_evolutionchain {
            pokemon_v2_pokemonspecies(order_by: {order: asc}) {
              name
              id
            }
          }
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
    `,
  });
  const {
    id,
    name,
    base_experience,
    height,
    weight,
    pokemon_v2_pokemonspecy: pokemonSpecies,
    pokemon_v2_pokemonstats: pokemonStats,
    pokemon_v2_pokemontypes: pokemonTypes,
  }: PokemonFromAPI = pokemon_v2_pokemon[0];

  const evolutions =
    pokemonSpecies?.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.map(
      (pokemon) => ({
        name: pokemon.name,
        id: pokemon.id,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
      })
    );

  const stats = pokemonStats?.map((stat) => ({
    name: stat.pokemon_v2_stat.name,
    value: stat.base_stat,
  }));

  const types = pokemonTypes?.map((type) => type.pokemon_v2_type.name);
  return {
    id,
    name,
    base_experience,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    height,
    weight,
    evolutions,
    stats,
    types,
  };
};

const getTypes = async (): Promise<string[]> => {
  const { data } = await client.query({
    query: gql`
      query getTypes {
        pokemon_v2_type(order_by: { name: asc }) {
          name
        }
      }
    `,
  });

  return data.pokemon_v2_type.map((type: { name: string }) => type.name);
};

export { getPokemons, getPokemonById, getTypes };
