import '../Css/Contact.css'

export function Contact() {
  return (
    <div id='container'>
      <form id='form'>
        <h2>Contactanos, tu opinion es valiosa!</h2>
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
        <h3>O si prefieres, contactanos por nuestras redes sociales!</h3>
        <div id='redes-buttons'>
        </div>
      </div>
    </div>
  )
}