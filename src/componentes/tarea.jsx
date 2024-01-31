import React from "react";
import "../hojas-style/tareas.css"
import { AiOutlineClose } from "react-icons/ai";

function Tarea({id, texto, estado, completarTarea, eliminarTarea}) {
    return (
        <div className={estado ? 'tarea-contenedor estado' : 'tarea-contenedor'}>
            <div
            onClick={()=> completarTarea(id)}
                className="tarea-texto">
                {texto}
            </div>
                <div 
                onClick={()=> eliminarTarea(id)}
                className="tarea-contenedor-iconos"> 
                {/**importa los iconos */}
                    <AiOutlineClose className="tarea-icono" />
                </div>
        </div>
    )
}

export default Tarea