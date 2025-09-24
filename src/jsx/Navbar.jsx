import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { Home, Info, Person, Flatware, Luggage } from '@mui/icons-material';

export function Navbar () {
    return (
        <nav className="Navbar">
            <div className="minibar-box">
                <img src="./img/Navbar-logo.png" className="navbar-logo" alt="" />
            </div>
            <h1 className="Título">MEMORIA EN RUTA</h1>
            <div className="navbar-links">
                <Link className="navbar-link" to="/home">
                    <Home />
                </Link>
                <Link className="navbar-link" to="/dinner">
                    <Flatware />
                </Link>
                <Link className="navbar-link" to="/travel">
                    <Luggage />
                </Link>
                <Link className="navbar-link" to="/contact">
                    <Person />
                </Link>
                <Link className="navbar-link" to="/about">
                    <Info />
                </Link>
            </div>
        </nav>
    );
}