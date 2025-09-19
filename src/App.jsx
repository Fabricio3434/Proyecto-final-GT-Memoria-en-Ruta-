import Navbar from './jsx/Navbar.jsx'
import SectionD from './jsx/SectionD.jsx'
import SectionT from './jsx/SectionT.jsx'
import Carrusel from './jsx/carrusel.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


function Inicio() { }

function AcercaDe() {
  return <h2>Página Acerca de</h2>;
}

function Contacto() {
  return <h2>Página de contacto</h2>;
}

function Cena() {
  return <h2>Página de cena</h2>;
}

function Viaje() {
  return <h2>Página de viaje</h2>;
}

const Footer = () => {
  return (
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
  )
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={
            <>
              <Inicio />
              <Carrusel />
              <SectionD />
              <SectionT />
              <Footer />
            </>
          } />
          <Route path="/dinner" element={<Cena />} />
          <Route path="/travel" element={<Viaje />} />
          <Route path="/about" element={<AcercaDe />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
