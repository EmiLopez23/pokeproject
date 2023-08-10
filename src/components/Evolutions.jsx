import { useNavigate } from "react-router-dom"
import "../styles/Evolutions.css"

export default function Evolutions({ evolutions }) {
    const navigate = useNavigate()

    return <div className="evolution-chain">
            {evolutions.map((evolve, index) => <div key={index} className="evolution" onClick={() => navigate(`/pokemon/${evolve.id}`)}>
                <img src={evolve.sprites.front_default} alt={evolve.name} />
                <h4>{evolve.name}</h4>
            </div>)}
        </div>
}