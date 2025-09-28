import '../Css/Contact.css'
import emailjs from "emailjs-com";

export function Contact() {
  return (
    <div id='container'>
      <form id='form' onSubmit={handleSubmit}>
        <h2 className='subtitle'>Contactanos, tu opinion es valiosa!</h2>
        <div>
          <label htmlFor="Name">Nombre</label>
          <input type="text" id="Name" name="Name" placeholder="Nombre"
            className='complete' />
        </div>
        <div>
          <label htmlFor="Apellido">Apellido</label>
          <input type="text" id="Apellido" name="Apellido" placeholder="Apellido"
            className='complete' />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" id="Email" name="Email" placeholder="Email"
            className='complete' />
        </div>
        <div>
          <label htmlFor="Message">Mensaje</label>
          <textarea id="Message" name="Message" placeholder="Dejános tu comentario!"
            cols={30} rows={5} className='complete' />
        </div>
        <span id='send-span'>
          <button type="submit" id='send'> Enviar </button>
        </span>
      </form>

      <div id='redes'>
        <h2>O si prefieres, contactanos por nuestras redes sociales!</h2>
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
    </div>
  )
}

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_78xey8u",
    "template_06qqq4o",
    e.target,
    "zAKBS-JL0agE_sUp4"
  ).then(() => {
    alert("Mensaje enviado a tu correo!");
  }).catch((error) => {
    console.error(error);
    alert("Error al enviar");
  });
};
