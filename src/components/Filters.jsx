import { useEffect, useState } from "react"
import { getTypes } from "../utils/pokemonApi"


export default function Filters({filters, setFilters}){
    const [types, setTypes] = useState([])

    useEffect(() => {
        getTypes().then((types) => setTypes(types))
    }, [])

    return <section className="filters">
        <input type="text" placeholder="Search pokemon"/>
        <select name="type" id="type">
            <option value="">All</option>
            {types?.map((type, index) => <option key={index} value={type}>{type}</option>)}
        </select>
        </section>
}