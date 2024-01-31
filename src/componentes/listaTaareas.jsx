import React, { useState, useEffect } from "react";
import TareaFormulario from "./tareaFormulario";
import "../hojas-style/listaTareas.css";
import Tarea from "../componentes/tarea";
import Swal from "sweetalert2";

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
        if(datos){
            Swal.fire({
                title:'Tarea Agregada',
                icon: "success",
              });
        }
    }
    function estado(id) {
        // Enviar una solicitud PUT para marcar la tarea como completada
        const tareaSeleccionada = datos.find((tarea) => tarea.id === id);
        fetch(`http://localhost:3500/tarea`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id:id,
                estado: !tareaSeleccionada.estado,
            }),
        })
        .then((respuesta) => {
            if (respuesta.ok) {
                // Mostrar alerta de éxito
                Swal.fire({
                    title: 'Tarea Completada',
                    icon: 'success',
                });
            } else {
                // Mostrar alerta de error
                Swal.fire({
                    title: 'No se pudo completar la tarea',
                    icon: 'warning',
                });
            }
        })
        .catch((error) => {
            // Manejar errores
            console.error(`Hubo un error al completar la tarea ${error}`);
        });
    }
    
    
    function eliminarTarea(id) {
        const tareasActualizadas = datos.filter((tarea) => tarea.id !== id);
        setDatos(tareasActualizadas);

        fetch('http://localhost:3500/tarea',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id}),
        })
        .then((respuesta) => {
            if (respuesta.ok) {
                Swal.fire({
                    title:'Tarea Eliminada',
                    icon: "success",
                  });
            }else{
                Swal.fire({
                    title:'No se pudo eliminar la tarea',
                    icon: "warning",
                  });
            }
        })
        .catch((error)=>{
            console.error(`Hubo un error al eliminar la tarea ${error}`);
        })
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
                        completarTarea={() => estado(tarea.id)}
                    />
                ))}
        </div>
    </>
);
}

export default ListaTareas;
