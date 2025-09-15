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

        {/* Cenas */}

        <div className='Carrusel'>
          <section className="cenas">
            <h2>Cenas</h2>
            <p>Éstas son las cenas más buscadas:</p>

            <div className="destinos">
              <div className="destino">
                <img src="https://via.placeholder.com/250x150" alt="Cena 1" />
                <h3>Cena en Buenos Aires</h3>
              </div>
              <div className="destino">
                <img src="https://via.placeholder.com/250x150" alt="Cena 2" />
                <h3>Cena en Córdoba</h3>
              </div>
              <div className="destino">
                <img src="https://via.placeholder.com/250x150" alt="Cena 3" />
                <h3>Cena en Rosario</h3>
              </div>
            </div>
          </section>
        </div>

        {/* Viajes */}

        <div className='Carrusel'>
          <section className="viajes">
            <h2>Viajes</h2>
            <p>Éstos son los destinos más buscados:</p>

            <div className="destinos">
              <div class="destino">
                <img src="https://via.placeholder.com/250x150" alt="Destino 1" />
                <h3>París</h3>
              </div>
              <div className="destino">
                <img src="https://via.placeholder.com/250x150" alt="Destino 2" />
                <h3>Roma</h3>
              </div>
              <div className="destino">
                <img src="https://via.placeholder.com/250x150" alt="Destino 3" />
                <h3>Tokio</h3>
              </div>
            </div>
          </section>
        </div>

        {/* Seccion footer */}

        <footer className="footer">
          <div id="agradecimientos">
            <p>Créditos y agradecimientos a:</p>
            <ul>
              <li>El profe Lucho</li>
              <li>Fabry</li>
              <li>Tizi</li>
              <li>Nanu</li>
              <li>Luci</li>
              <li>Ezequiel</li>
            </ul>
          </div>
          <div id="copyright">
            © 2025 Memoria en Ruta - Todos los derechos reservados
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
