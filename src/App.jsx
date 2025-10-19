import { Navbar, Inicio, AcercaDe, Contacto } from './jsx/Navbar.jsx'
import { OrganizarC, OrganizarV } from './jsx/Cena&Viaje.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/home" element={<Inicio />} />
          {/* <Route path="/dinner" element={<Cena />} />
          <Route path="/travel" element={<Viaje />} /> */}
          <Route path="/about" element={<AcercaDe />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/organizeDinner" element={<OrganizarC />} />
          <Route path="/organizeTravel" element={<OrganizarV />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
