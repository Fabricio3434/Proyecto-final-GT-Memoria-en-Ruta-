import { Navbar } from './jsx/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
