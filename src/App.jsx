import './App.css'
import Navbar from './Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Inicio() {
  return <h2>Página de inicio</h2>;
}

function AcercaDe() {
  return <h2>Página Acerca de</h2>;
}

function Contacto() {
  return <h2>Página de contacto</h2>;
}
function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<AcercaDe />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
