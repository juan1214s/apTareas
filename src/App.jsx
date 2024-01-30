import React from 'react'
import freecodecampImg from "./imagenes/image.png"
import './App.css'
import ListaTareas from './componentes/listaTaareas'



function App() {
   return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={freecodecampImg} 
        className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
      <ListaTareas />
      </div>
    </div>
  )
}

export default App

