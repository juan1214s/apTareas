import React, { useRef } from "react";
import '../hojas-style/tareasFormulario.css'
import { v4 as uuidv4} from "uuid"

function TareaFormulario(props) {
    const inputRef = useRef(null);

    function manejarEnvio(e) {
        e.preventDefault();
        const texto = inputRef.current.value.trim();
        if (texto) {
            const tareaNueva = {
                id: uuidv4(),
                texto: texto,
                estado: false
            }
            props.onSubmit(tareaNueva);
            // Limpiar el input utilizando la referencia
            inputRef.current.value = '';
        }
    }

    return (
        <form
            className="tarea-formulario"
            onSubmit={manejarEnvio}
        >
            <input
                ref={inputRef}
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

export default TareaFormulario;
