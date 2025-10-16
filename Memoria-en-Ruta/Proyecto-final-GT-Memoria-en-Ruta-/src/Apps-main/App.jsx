import { useState, useEffect } from "react";
import { Navbar, Inicio, Cena, Viaje, AcercaDe, Contacto } from "../jsx/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../css/ModoOscuro.css"

function App() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") setDark(true);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <div className={`app ${dark ? "dark" : "light"}`}>
            <BrowserRouter>
                {/* Botón modo oscuro arriba del todo */}
                <div className="theme-toggle-container">
                    <button
                        className="theme-toggle"
                        onClick={() => setDark(!dark)}
                        aria-label="Cambiar modo"
                    >
                        <span className="icon">{dark ? "🌙" : "☀️"}</span>
                    </button>
                </div>

                {/* Navbar y rutas */}
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/home" element={<Inicio />} />
                    <Route path="/dinner" element={<Cena />} />
                    <Route path="/travel" element={<Viaje />} />
                    <Route path="/about" element={<AcercaDe />} />
                    <Route path="/contact" element={<Contacto />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;