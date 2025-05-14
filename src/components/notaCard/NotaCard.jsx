import { useNavigate } from "react-router-dom";

//este archivo es para mostrar solo ciertas partes de la tarea en el home 

export function NotaCard({tarea}){
    
    const navigate = useNavigate();

    return (
        <div style={{background : "blue"}}
        
            onClick={() => {
              navigate('/note/' + tarea.id)
            }}

        >
                <h2>{tarea.titulo}</h2>
                <p>{tarea.descripcion}</p>
        </div>
    );
}