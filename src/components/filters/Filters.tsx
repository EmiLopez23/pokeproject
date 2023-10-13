import { ChangeEvent, SetStateAction } from 'react';
import './Filters.css';
import UseTypes from 'hooks/useTypes';

interface Filter {
  name: string;
  type: string;
}

interface FiltersProps {
  filters: Filter;
  setFilters: (value: SetStateAction<Filter>) => void;
}

const Filters = ({ filters, setFilters }: FiltersProps) => {
  const { types } = UseTypes();

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({ ...prevState, type: event.target.value }));
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({ ...prevState, name: event.target.value }));
  };

  return (
    <section className="filters" id="filters">
      <input
        value={filters.name}
        type="text"
        placeholder="Charizard"
        onChange={handleNameChange}
      />
      <select onChange={handleTypeChange}>
        <option value={''}>All</option>
        {types.map((type) => (
          <option value={type.name} key={type.id}>
            {type.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Filters;
