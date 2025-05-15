import {useEffect} from 'react';
import "./Note.css";
import {useForm} from 'react-hook-form'
import {crearNota, eliminarNota, actualizarNota, obtenerNota} from '../../api/NotasApi'
import { useNavigate, useParams } from "react-router-dom";
import Card from '../../components/card/Card'
import {Button} from '../../components/button/Button'
import {CircleArrowLeft, CircleX, CircleCheck} from 'lucide-react'

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
        <div >
            <div className='boton-volver'>
                <Button onClick={() => navigate('/home')}>
                    Volver
                    <CircleArrowLeft />
                </Button>
            </div>
            
            <div className='note-card'>
                <Card>
                <form onSubmit={onSubmit} className='formulario' >

                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input
                        id="titulo"
                        type="text"
                        placeholder="Escribí el título..."
                        {...register("titulo", { required: true })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea
                        id="descripcion"
                        rows="3"
                        placeholder="Escribí una descripción..."
                        {...register("descripcion", { required: true })}
                        ></textarea>
                    </div>

                    <Button>
                        Guardar
                        <CircleCheck />
                    </Button>
                </form>


               <div className='boton-eliminar-entero' >
                    {params.id && (
                        <Button
                            className='boton-eliminar'
                            onClick = {async() => {
                                const accepted = window.confirm("¿Seguro que quieres eliminar la tarea?");
                                if (accepted) {
                                    await eliminarNota(params.id);
                                    navigate('/home');
                                }
                            }} 

                        > Eliminar
                        <CircleX />
                        </Button>/*si params tiene id entonces me muestra el boton eliminar*/
                    )}
                </div>
            </Card>
            </div>

           
        </div>
    );
}

export default Note;