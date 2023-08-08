import { useEffect, useState } from "react"
import { getTypes } from "../utils/pokemonApi"
import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material"


export default function Filters({filter}) {
    const [types, setTypes] = useState([])
    const [filters, setFilters] = useState({ name: "", type: "" });

    function handleTypeChange(event) {
     //   filterPokemons(event.target.value)
        setFilters(prevState => ({ ...prevState, type: event.target.value }));
    };

    function handleNameChange(event) {
     //   searchPokemons(event.target.value)
        setFilters(prevState => ({ ...prevState, name: event.target.value }));
    }

    useEffect(() => {
        getTypes().then((types) => setTypes(types))
    }, [])

    useEffect(()=>{
        filter(filters)
    },[filters])


    return <section className="filters">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <OutlinedInput
          id="component-outlined"
          placeholder="Name"
          sx={{ backgroundColor: 'white' }}
          value={filters.name}
          onChange={handleNameChange}
        />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select value={filters.type} onChange={handleTypeChange} sx={{ backgroundColor: 'white' }} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value="">All</MenuItem>
                {types?.map((type, index) => <MenuItem key={index} value={type}>{type}</MenuItem>)}
            </Select>
        </FormControl>
    </section>
}