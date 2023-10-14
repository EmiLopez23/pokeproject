export interface BasePokemon {
  name: string;
  id: number;
  sprite: string;
}

export interface BasicPokemonInfo extends BasePokemon {
  types: Type[];
}

export interface Pokemon extends BasePokemon {
  height: number;
  weight: number;
  base_experience: number;
  evolutions: BasePokemon[];
  stats: Stat[];
  types: Type[];
}

export interface Stat {
  name: string;
  value: number;
}

export interface Type {
  name: string;
  id: number;
}

export interface Filter {
  name: string;
  type: string;
}
