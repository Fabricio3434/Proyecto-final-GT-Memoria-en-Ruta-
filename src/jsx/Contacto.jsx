import '@/css/Contact.css'
import { useState } from "react";
import emailjs from "emailjs-com";


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

        //Función que comprueba si el Email cuenta con los dominios indicados
        const dominiosValidos = ["@gmail.com", "@hotmail", "@icloud.com"];

        //Se crea una función que verifica si dominiosValidos es true
        const emailValido = dominiosValidos.some(d => email.includes(d));

        //Cóndiciones que se deben cumplir si o si para que el formulario se considere válido
        if (!startsWithUpper(nombre) || !startsWithUpper(apellido) || !emailValido) {
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
                    <label id='label' htmlFor="Name">Nombre</label>
                    <input type="text" id="Name" name="Name" placeholder="Nombre (A-Z)"
                        className='complete' />
                </div>
                <div>
                    <label id='label' htmlFor="Apellido">Apellido</label>
                    <input type="text" id="Apellido" name="Apellido" placeholder="Apellido (A-Z)"
                        className='complete' />
                </div>
                <div>
                    <label id='label' htmlFor="Email">Email</label>
                    <input type="text" id="Email" name="Email" placeholder="Email (@)"
                        className='complete' />
                </div>
                <div>
                    <label id='label' htmlFor="Message">Mensaje</label>
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