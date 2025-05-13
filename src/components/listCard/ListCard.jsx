import {useEffect, useState } from "react";
import { getNotas } from "../../api/NotasApi";
import { NotaCard } from "../notaCard/NotaCard";


export function ListCard(){
     
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        async function cargarTareas(){
            const respuesta =  await getNotas();
            console.log(respuesta);   
            setTareas(respuesta.data);
        } 
        cargarTareas();
    }, []);
    
    return <div>
        {tareas.map(tarea =>(
            <NotaCard key = {tarea.id} tarea={tarea}/>
        ))}
    </div>;
}
