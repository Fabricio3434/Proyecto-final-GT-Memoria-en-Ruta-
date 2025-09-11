import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="minibar-box">
                <img src="./img/Navbar-logo.png" className="navbar-logo" alt="" />
            </div>
            <h1 className="Título">MEMORIA EN RUTA</h1>
            <div className="navbar-links">
                <Link className="navbar-link" to="/">Inicio</Link>
                <Link className="navbar-link" to="/about">Acerca de</Link>
                <Link className="navbar-link" to="/contact">Contacto</Link>
            </div>
        </nav>
    );
};

export default Navbar;