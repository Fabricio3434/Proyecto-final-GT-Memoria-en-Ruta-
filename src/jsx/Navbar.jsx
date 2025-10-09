import '../css/Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Person, Flatware, Luggage } from '@mui/icons-material';
import { AcercaDeNosotros, Carrusel, Contact, DinnerSection, TravelSection, Footer } from '../js/componentes'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="Navbar">
                <div className="minibar-box">
                    <img src="./img/Navbar-logo.png" className="navbar-logo" alt="" />
                </div>
                <h1 className="Título">MEMORIA EN RUTA</h1>{/* Título de la nabvar para pantallas normales */}
                <h1 className="título-cel">MER</h1>{/* Título de la nabvar para pantallas pequeñas */}
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

                {/*Botón desplegable para pantallas pequeñas*/}
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
//Inicio
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
        <h2>Página de cena (en progreso) </h2>
    )
}

//Viaje
export function Viaje() {
    return (
        <h2>Página de viaje (en progreso) </h2>
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
        <AcercaDeNosotros />
    )
}