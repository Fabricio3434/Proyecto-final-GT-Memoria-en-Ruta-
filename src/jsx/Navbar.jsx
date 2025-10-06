import "../css/Navbar.css";
import '../Css/Contact.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Person, Flatware, Luggage } from '@mui/icons-material';
import { DinnerSection, TravelSection } from "./Sections.jsx";
import { Carrusel } from "./carrusel.jsx";
import emailjs from "emailjs-com";

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

export function Contact() {

    const [mensajeEnviado, setMensajeEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviando(true);

        //Tomamos los valores de Name, Apellido y Email
        const nombre = e.target.Name.value;
        const apellido = e.target.Apellido.value;
        const email = e.target.Email.value;

        //Función para testear que nombre y apellido empiecen con mayúsculas
        const startsWithUpper = (str) => /^[A-Z]/.test(str);

        //Cóndiciones que se deben cumplir si o si para que el formulario se considere válido
        if (!startsWithUpper(nombre) || !startsWithUpper(apellido) || !email.includes("@")) {
            setError(true); //Si algo no se cumple renderizamos Error
            setEnviando(false); //Ocultamos Enviando
            return;
        }

        //Si el formulario resulta válido se ejecutará el EmailJs
        emailjs.sendForm(
            "service_78xey8u",
            "template_06qqq4o",
            e.target,
            "zAKBS-JL0agE_sUp4"
        ).then(() => {
            setError(false)
            setEnviando(false);
            setMensajeEnviado(true);
            e.target.reset();
        }).catch((error) => {
            setError(true)
            setEnviando(false)
        });
    };

    return (
        <div id='container'>
            <form id='form' onSubmit={handleSubmit}>
                <h2 className='subtitle'>Contactanos, tu opinion es valiosa!</h2>
                <div>
                    <label htmlFor="Name">Nombre</label>
                    <input type="text" id="Name" name="Name" placeholder="Nombre (A-Z)"
                        className='complete' />
                </div>
                <div>
                    <label htmlFor="Apellido">Apellido</label>
                    <input type="text" id="Apellido" name="Apellido" placeholder="Apellido (A-Z)"
                        className='complete' />
                </div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="text" id="Email" name="Email" placeholder="Email (@)"
                        className='complete' />
                </div>
                <div>
                    <label htmlFor="Message">Mensaje</label>
                    <textarea id="Message" name="Message" placeholder="Dejános tu comentario!"
                        cols={30} rows={8} className='complete' />
                </div>
                <span id='sent-span'>
                    <button type="submit" id='sent'> Enviar </button>
                </span>
            </form>

            {mensajeEnviado && (
                <div className='sent'>
                    <div id='s'>
                        <h1>¡Tu mensaje fue enviado!</h1>
                        <p>Nos pondremos en contacto contigo pronto.</p>
                        <button onClick={() => setMensajeEnviado(false)} id='close'>Cerrar</button>
                    </div>
                </div>
            )}

            {enviando && (
                <div className="sent">
                    <div id="s">
                        <h1>Enviando...</h1>
                        <p>Por favor espera un momento.</p>
                    </div>
                </div>
            )}

            {error && (
                <div className='sent'>
                    <div id='s'>
                        <h1>Se ha producido un error al enviar</h1>
                        <p>Por favor verifique que todo este en orden.</p>
                        <button onClick={() => setError(false)} id='close'>Cerrar</button>
                    </div>
                </div>
            )}

            <div id='redes'>
                <h2 className="subtitle" >O si prefieres, contactanos por nuestras redes sociales!</h2>
                <div id='redes-buttons'>
                    <button id='red-button-Facebook'
                        onClick={() => window.open('https://www.facebook.com', '_blank')}>Facebook</button>
                    <button id='red-button-Twitter'
                        onClick={() => window.open('https://www.twitter.com', '_blank')}>Twitter</button>
                    <button id='red-button-Instagram'
                        onClick={() => window.open('https://www.instagram.com', '_blank')}>Instagram</button>
                    <button id='red-button-LinkedIn'
                        onClick={() => window.open('https://www.linkedin.com', '_blank')}>LinkedIn</button>
                    <button id='red-button-WhatsApp'
                        onClick={() => window.open('https://www.whatsapp.com', '_blank')}>WhatsApp</button>
                </div>
            </div>

            <div id='welcome-message'>
                <h1>MEMORIA EN RUTA TE ESPERA!</h1>
            </div>
        </div>
    );
}

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
            <div>
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
            <div>
                © 2025 Memoria en Ruta - Todos los derechos reservados
            </div>
        </footer>
    )
}