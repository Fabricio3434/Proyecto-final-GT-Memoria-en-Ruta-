import React from 'react'
import './CSS/App.css'
import './CSS/Header.css'
import './CSS/Footer.css'
import './CSS/Carrusel.css'

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

          <div className='cenas'>
            <p>Descubre aqui las cenas!</p>
            <p id='Destinos-populares'>Éstos son los lugares mas buscados:</p>
            <img src="ger" alt="img1" />
            <img src="few" alt="img2" />
            <img src="ds" alt="img3" />
          </div>



          <div className='viajes'>
            <p>Descubre aquí los viajes!</p>
            <p id='Destinos-populares'>Éstos son los destinos mas buscados:</p>
            <img src="ger" alt="img1" />
            <img src="few" alt="img2" />
            <img src="ds" alt="img3" />
          </div>

        </div>

        {/* Seccion footer */}

        < footer className='footer'>
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
          <div id='copyright'>
            © 2025 Memoria en Ruta - Todos los derechos reservados
          </div>


        </footer>
      </div >
    </>
  )
}

export default App
