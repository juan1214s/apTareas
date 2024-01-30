import React, { useState, useEffect } from "react";
import TareaFormulario from "./tareaFormulario";
import "../hojas-style/listaTareas.css";
import Tarea from "../componentes/tarea";

function ListaTareas() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:3500/tarea')
                .then((respuesta) => {
                    if (respuesta.ok) {
                        return respuesta.json();
                    } else {
                        throw new Error('Error en la solicitud a la API: ' + respuesta.statusText);
                    }
                })
                .then((datos) => {
                    setDatos(datos.recorset);
                })
                .catch((error) => {
                    console.error(`Error al mostrar los datos ${error}`);
                });
        };
        fetchData();
    }, []);

    
    function agregarTarea(tarea) {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...datos];
            setDatos(tareasActualizadas);
        }
        fetch('http://localhost:3500/tarea',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(tarea)
        })
    }

    function completarTarea(id) {
        const tareasActualizadas = datos.map((tarea) => {
            if (tarea.id === id) {
                tarea.estado = !tarea.estado;
            }
            return tarea;
        });
        setDatos(tareasActualizadas);
    }

    function eliminarTarea(id) {
        const tareasActualizadas = datos.filter((tarea) => tarea.id !== id);
        setDatos(tareasActualizadas);

        fetch('http://localhost:3500/tarea',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(id)
        })
        .then((respuesta.ok)=>{})
    }


    return (
        <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
            {
                datos.map((tarea) => (
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        estado={tarea.estado}
                        eliminarTarea={() => eliminarTarea(tarea.id)}
                        completarTarea={() => completarTarea(tarea.id)}
                    />
                ))}
        </div>
    </>
);
}

export default ListaTareas;
