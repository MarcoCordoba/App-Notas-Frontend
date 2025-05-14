import {useEffect} from 'react';
import "./Note.css";
import {useForm} from 'react-hook-form'
import {crearNota, eliminarNota, actualizarNota, obtenerNota} from '../../api/NotasApi'
import { useNavigate, useParams } from "react-router-dom";

function Note() {

    const {register, handleSubmit, setValue} = useForm();
    const navigate = useNavigate(); 
    const params = useParams();
        
    const onSubmit = handleSubmit(async (data) => {        
        if (params.id){
            await actualizarNota(params.id, data)
        } else {
            await crearNota(data)
        }
        navigate("/home");
    });


    useEffect (() => {
       async function cargarTarea() {
            if (params.id){
                const res = await obtenerNota(params.id)
                setValue('titulo', res.data.titulo)
                setValue('descripcion', res.data.descripcion)
            }
        } 
        cargarTarea();
    }, []);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text"
                    placeholder="titulo"
                   {...register("titulo", {required: true})}
                />

                <textarea rows = "3" 
                    placeholder="descripcion"
                    {...register("descripcion", {required: true})}
                ></textarea>
                <button>guardar</button>
            </form>

            {params.id && (
                <button 
                    onClick = {async() => {
                        const accepted = window.confirm("¿Seguro que quieres eliminar la tarea?");
                        if (accepted) {
                            await eliminarNota(params.id);
                            navigate('/home');
                        }
                    }}
                >
                    eliminar
                </button>/*si params tiene id entonces me muestra el boton eliminar*/
            )}
        </div>
    
    );
}

export default Note;