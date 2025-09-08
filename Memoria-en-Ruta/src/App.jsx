import React from 'react'
import './App.css'
import './Header.css'
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
        </header>

        <div className='Carrusel'>
          {/* Carrusel */}
          carrusel
        </div>

        {/* Seccion footer */}

        < footer className='footer' >
          <div id=''>
            © 2025 Memoria en Ruta - Todos los derechos reservados
          </div>

          <div id='agradecimientos'>
            <p>Créditos y agradecimientos a:
              <li>El profe Lucho</li>
              <li>Fabry</li>
              <li>Tizi</li>
              <li>Nanu</li>
              <li>Luci</li>
              <li>Ezequiel</li>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
