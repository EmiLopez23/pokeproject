import { useEffect, useState } from 'react';
import { Type } from 'types';
import { getTypes } from 'utils/pokemonApi';

const UseTypes = () => {
  const [types, setTypes] = useState<Type[]>([]);

  useEffect(() => {
    getTypes().then((types) => setTypes(types));
  }, []);

  return { types };
};
export default UseTypes;
