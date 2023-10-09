export interface BasePokemon {
  name: string;
  id: number;
  sprite: string;
}

export interface Pokemon extends BasePokemon {
  height: number;
  weight: number;
  base_experience: number;
  evolutions: BasePokemon[];
  stats: Stat[];
  types: string[];
}

export interface Stat {
  name: string;
  value: number;
}
