import { useEffect, useState } from "react";
import { getNotas } from "../../api/NotasApi";
import { NotaCard } from "../notaCard/NotaCard";
import "./ListCard.css"; // importá el CSS

export function ListCard() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function cargarTareas() {
      const respuesta = await getNotas();
      // se da vuelta el orden para que la más nueva esté al principio
      setTareas(respuesta.data.reverse());
    }
    cargarTareas();
  }, []);

  return (
    <div className="card-lista">
      {tareas.map((tarea) => (
        <NotaCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}
