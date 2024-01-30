import React from "react";
import '../hojas-style/tareasFormulario.css'
import {useState} from "react"
import { v4 as uuidv4} from "uuid"

function TareaFormulario(prosp) {
    const [input, setInput] = useState('');

    function manejarCambio(e){
        setInput(e.target.value)//permite extraer el valor del campo donde escribe el usuario
    };

    function manejarEnvio(e) {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(), 
            texto: input,
            estado:false
        }
        //al enviar el formulario va permitir q lo enviemos como props a el proximo componente
        prosp.onSubmit(tareaNueva);
    };


    return(
        <form 
         className="tarea-formulario"
         onSubmit={manejarEnvio}>
            <input 
            ///cuando Ocurra un cambio
            onChange={manejarCambio}
            className="tarea-input" 
            type="text"
            placeholder="Escribe una Tarea"
            name="texto"
            />
            <button className="tarea-boton">
            Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario