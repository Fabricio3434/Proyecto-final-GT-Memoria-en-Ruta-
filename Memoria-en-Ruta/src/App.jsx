import React from 'react'
import './App.css'
import './Header.css'
import './Cenas.css'
import './Footer.css'
import './Carrusel.css'

function App() {
  return (
    <>
      <div className='app'>

        {/* Seccion de bienvenida */}

        <header className='bienvenida'>
          <div>
            <img src="./Img/MemoriaEnRuta.png" alt="" />
          </div>
          <div>
            <h1 id='eslogan'>Memoria en Ruta</h1>
            <p id='eslogan'>Organizá tus viajes y cenas de egresados de manera intuitiva y rápida</p>
          </div>
          <div className='barra-de-nav'>
            <nav>home</nav>
            <nav>about</nav>
            <nav>destination</nav>
            <nav>contact</nav>
          </div>
        </header >

        {/* Seccion de viajes */}

        <div>
          {/* Carrusel */}
        </div>

        < section className='cenas' >
          <h2>Cenas</h2>
          <p>En esta seccion van las cenas y eventos organizados.</p>
        </section >

        {/* Seccion footer */}

        < footer className='footer' >
          © 2025 Memoria en Ruta - Todos los derechos reservados
        </footer >
      </div >
    </>
  )
}

export default App
