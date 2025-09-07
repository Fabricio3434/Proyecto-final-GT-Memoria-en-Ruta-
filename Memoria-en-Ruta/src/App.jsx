import React from 'react'
import './App.css'
import { Carrusel } from './carrusel de img/carrusel'

function App() {
  return (
    <div className='app'>
      {/* Seccion de bienvenida */}
      <header className='bienvenida'>
        <h1>Memoria en Ruta</h1>
        <Carrusel/>
        <p>Organizá tus viajes y cenas de egresados de manera intuitiva y rápida</p>
      </header>
      {/* Seccion de viajes */}
      <section className='cenas'>
        <h2>Cenas</h2>
        <p>En esta seccion van las cenas y eventos organizados.</p>
      </section>
      {/* Seccion footer */}
      <footer className='footer'>
        © 2025 Memoria en Ruta - Todos los derechos reservados
      </footer>
    </div>
  )
}

export default App
