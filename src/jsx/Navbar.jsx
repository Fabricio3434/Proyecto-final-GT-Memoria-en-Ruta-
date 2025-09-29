import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { Home, Info, Person, Flatware, Luggage } from '@mui/icons-material';
import { DinnerSection, TravelSection } from "./Sections.jsx"
import { Carrusel } from "./carrusel.jsx";
import { Contact } from "./Contact.jsx";

export function Navbar() {
    return (
        <nav className="Navbar">
            <div className="minibar-box">
                <img src="./img/Navbar-logo.png" className="navbar-logo" alt="" />
            </div>
            <h1 className="Título">MEMORIA EN RUTA</h1>
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
        </nav>
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
        <>
            <Contact />
            <Footer /></>
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