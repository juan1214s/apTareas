import React from 'react'
import './App.css'
import ListaTareas from './componentes/listaTaareas'



function App() {
   return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
      </div>
      <div className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
      <ListaTareas />
      </div>
    </div>
  )
}

export default App

