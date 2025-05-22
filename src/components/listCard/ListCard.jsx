import { useEffect, useState } from "react";
import { getNotas } from "../../api/NotasApi";
import { NotaCard } from "../notaCard/NotaCard";
import "./ListCard.css";

export function ListCard() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function cargarTareas() {
      const respuesta = await getNotas();
      setTareas(respuesta.data.reverse());
    }
    cargarTareas();
  }, []);

  const tareasLimitadas = tareas.slice(0, 10);

  return (
    <div className="card-lista">
      {tareasLimitadas.map((tarea) => (
        <NotaCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}

