import "../css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Person, Flatware, Luggage } from '@mui/icons-material';
import { DinnerSection, TravelSection } from "./Sections.jsx"
import { Carrusel } from "./carrusel.jsx";
import { Contact } from "./Contact.jsx";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="Navbar">
                <div className="minibar-box">
                    <img src="./img/Navbar-logo.png" className="navbar-logo" alt="" />
                </div>
                <h1 className="Título">MEMORIA EN RUTA</h1>
                <h1 className="título-cel">MER</h1>
                <div className="navbar-links">
                    <Link className="navbar-link" to="/home">
                        <Home sx={{ color: "#E3C16F" }} />
                    </Link>
                    <Link className="navbar-link" to="/dinner">
                        <Flatware sx={{ color: "#E3C16F" }} />
                    </Link>
                    <Link className="navbar-link" to="/travel">
                        <Luggage sx={{ color: "#E3C16F" }} />
                    </Link>
                    <Link className="navbar-link" to="/contact">
                        <Person sx={{ color: "#E3C16F" }} />
                    </Link>
                    <Link className="navbar-link" to="/about">
                        <Info sx={{ color: "#E3C16F" }} />
                    </Link>
                </div>

                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}   >
                    ☰
                </button>

            </nav>

            <div id="boton-desplegable">
                <div className={`menu ${isOpen ? "open" : ""}`}>
                    <Link to="/home" onClick={() => setIsOpen(false)}>
                        Inicio
                        <Home sx={{ color: "inherit" }} />
                    </Link>
                    <Link to="/dinner" onClick={() => setIsOpen(false)}>
                        Cenas
                        <Flatware sx={{ color: "#E3C16F" }} />
                    </Link>
                    <Link to="/travel" onClick={() => setIsOpen(false)}>
                        Viajes
                        <Luggage sx={{ color: "#E3C16F" }} />
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Contacto
                        <Person sx={{ color: "#E3C16F" }} />
                    </Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>
                        Acerca De
                        <Info sx={{ color: "#E3C16F" }} />
                    </Link>
                </div>
            </div>
        </>
    );
}

//Secciones de la navbar
//Home
export function Inicio() {
    return (
        <>
            <Carrusel />
            <DinnerSection />
            <TravelSection />
            <Footer />
        </>
    )
}

//Cena
export function Cena() {
    return (
        <h2>Página de cena</h2>
    )
}

//Viaje
export function Viaje() {
    return (
        <h2>Página de viaje</h2>
    )
}

//Contacto
export function Contacto() {
    return (
        <Contact />
    )
}

//Acerca de
export function AcercaDe() {
    return (
        <h2>Página Acerca de</h2>
    )
}

//Footer
export function Footer() {
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