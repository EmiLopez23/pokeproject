import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
import { getTypes } from 'utils/pokemonApi';
import './Filters.css';

interface Filter {
  name: string;
  type: string;
}

interface FiltersProps {
  filters: Filter;
  setFilters: (value: SetStateAction<Filter>) => void;
}

const Filters = ({ filters, setFilters }: FiltersProps) => {
  const [types, setTypes] = useState(['']);

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({ ...prevState, type: event.target.value }));
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({ ...prevState, name: event.target.value }));
  };

  useEffect(() => {
    getTypes().then((types) => setTypes(types));
  }, []);

  return (
    <section className="filters">
      <input
        value={filters.name}
        type="text"
        placeholder="Charizard"
        onChange={handleNameChange}
      />
      <select onChange={handleTypeChange}>
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
