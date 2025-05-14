import { useNavigate } from "react-router-dom";
import Card from "../card/Card";

export function NotaCard({tarea}){
    
    const navigate = useNavigate();

    return (
       <Card>
            <div className="card-nota"
        
                onClick={() => {
                navigate('/note/' + tarea.id)
            }}
            
        >
                <h2>{tarea.titulo}</h2>
                <p>{tarea.descripcion}</p>
            </div>
       </Card>
    );
}