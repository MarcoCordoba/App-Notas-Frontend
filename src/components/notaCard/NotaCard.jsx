import { useNavigate } from "react-router-dom";
import Card from "../card/Card";
import './NotaCard.css'

export function NotaCard({tarea}){
    
    const navigate = useNavigate();

    return (
       <Card className="card-home">
            <div onClick={() => { navigate('/note/' + tarea.id)}} className="card-home-content">
                <h2>{tarea.titulo}</h2>
                <p>{tarea.descripcion}</p>
            </div>
       </Card>
    );
}