import "../css/Navbar.css";
import '../css/Contact.css'
import '../css/Acerca.css'
import { cenas, viajes, empresa } from '../private'
import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
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

export function AcercaDeNosotros() {
    const [voltear, setVoltear] = useState(false)
    const [voltear2, setVoltear2] = useState(false)
    const [voltear3, setVoltear3] = useState(false)
    const cambiar = () => {
        setVoltear(!voltear)
    }
    const cambiar2 = () => {
        setVoltear2(!voltear2)
    }
    const cambiar3 = () => {
        setVoltear3(!voltear3)
    }
    return (
        <>
            <section className='acomodar'>
                <div className="envase">
                    <div className={`carta ${voltear ? "voltear" : ""}`}>
                        <div className="photos adelante">
                            <img src={empresa} alt="avion" className="imagenes" />
                            <h1 className='titulo' id='primero'>Quienes somos</h1>
                        </div>

                        <div className="photos atras">
                            <p> Somos una empresa especializada en la organización de cenas y viajes para egresados de diferentes provincias a lo largo del país.
                                Fundada recientemente, contamos con un sistema de formularios de planificación de reuniones para ayudarte a organizar el viaje
                                y cena de tus sueños.
                            </p>
                        </div>
                    </div>
                    <div className='centrarboton'>
                        <button className='girar' onClick={cambiar}>
                            ver más
                        </button>
                    </div>
                </div>
                {/*Segundo */}
                <div className="envase">
                    <div className={`carta ${voltear2 ? "voltear" : ""}`}>
                        <div className="photos adelante">
                            <img src={viajes} alt="avion" className="imagenes" />
                            <h1 className='titulo' id='segundo'>Viajes</h1>
                        </div>

                        <div className="photos atras">
                            <p> Contamos con distintos destinos a lo largo del país y del mundo. Incluyendo paquetes con sets
                                turistícos a Europa, Asía, América del sur e incluso Oceanía
                            </p>
                        </div>
                    </div>
                    <div className='centrarboton'>
                        <button className='girar' onClick={cambiar2}>
                            ver más
                        </button>
                    </div>
                </div>
                {/* Tercero */}
                <div className="envase">
                    <div className={`carta ${voltear3 ? "voltear" : ""}`}>
                        <div className="photos adelante">
                            <img src={cenas} alt="avion" className="imagenes" />
                            <h1 className='titulo' id='tercero'>Cenas</h1>
                        </div>
                        <div className="photos atras">
                            <p> Planificamos tu cena en el mejor lugar en tu areá de residencia, con catering y demás servicios incluidos</p>
                        </div>
                    </div>
                    <div className="centrarboton">
                        <button className='girar' onClick={cambiar3}>
                            ver más
                        </button>
                    </div>
                </div>
            </section>
            <div id='alinearh2'>
                <h2 id='h2'> Fundadores </h2>
            </div>
            <section id='seccion2'>
                <Stack direction="row" spacing={6}>
                    <Avatar
                        sx={{ width: 80, height: 80, margin: 50, fontSize: 40, backgroundColor: 'orange' }}
                    >F</Avatar>
                    <ul id='F'>
                        <li>Fabri</li>
                        <li> Referente</li>
                        <li>Navbar</li>
                        <li>Pág.Contactos</li>
                    </ul>

                    <Avatar
                        sx={{ width: 80, height: 80, fontSize: 40, backgroundColor: 'blue' }}
                    >L</Avatar>
                    <ul id='L'>
                        <li>Luci</li>
                        <li>Carrusel de img</li>
                        <li>Pág. Acerca De</li>
                    </ul>
                    <Avatar
                        sx={{ width: 80, height: 80, fontSize: 40, backgroundColor: 'purple' }}
                    >N</Avatar>
                    <ul id='N'>
                        <li>Nanu</li>
                        <li>Secciones de cenas y viajes</li>
                        <li>Footer</li>
                    </ul>
                    <Avatar
                        sx={{ width: 80, height: 80, fontSize: 40, backgroundColor: 'pink' }}
                    >T</Avatar>
                    <ul id='T'>
                        <li>Tizi</li>
                        <li>...</li>
                    </ul>
                    <Avatar
                        sx={{ width: 80, height: 80, fontSize: 40, backgroundColor: 'green' }}
                    >E</Avatar>
                    <ul id='E'>
                        <li>Ezequiel</li>
                        <li>...</li>
                    </ul>
                </Stack>
            </section>
        </>
    )
}

export function AcercaDe() {
    return (
        <AcercaDeNosotros />
    )
}

//Footer
export function Footer() {
    return (
        <footer className="footer">
            <div>
                <p>Créditos y agradecimientos a:</p>
                <ul>
                    <li>El profe Lucio Petrucci</li>
                    <li>Fabricio Vedia Vega ---- (Fabri)</li>
                    <li>Lucia Mamanis ---- (Luci)</li>
                    <li>Tizina Acosta ---- (Tizi)</li>
                    <li>Nahuel Menrath ---- (Nanu)</li>
                    <li>Ezequiel Claveriz ---- (Eze)</li>
                </ul>
            </div>
            <div>
                © 2025 Memoria en Ruta - Todos los derechos reservados
            </div>
        </footer>
    )
}