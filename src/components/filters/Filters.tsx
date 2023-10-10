import { ChangeEvent, useEffect, useState } from 'react';
import { getTypes } from 'utils/pokemonApi';
import './Filters.css';

const Filters = ({ filter }: { filter: any }) => {
  const [types, setTypes] = useState(['']);
  const [filters, setFilters] = useState({ name: '', type: '' });

  //function handleTypeChange(event) {
  //  //   filterPokemons(event.target.value)
  //  setFilters((prevState) => ({ ...prevState, type: event.target.value }));
  //}
  //
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setFilters((prevState) => ({ ...prevState, name: event.target.value }));
  };

  useEffect(() => {
    getTypes().then((types) => setTypes(types));
  }, []);
  //
  //useEffect(() => {
  //  filter(filters);
  //}, [filters]);

  return (
    <section className="filters">
      <input
        value={filters.name}
        type="text"
        placeholder="Charizard"
        onChange={handleNameChange}
      />
      <select>
        <option value={''}>All</option>
        {types.map((type, index) => (
          <option value={type} key={index}>
            {type}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Filters;
