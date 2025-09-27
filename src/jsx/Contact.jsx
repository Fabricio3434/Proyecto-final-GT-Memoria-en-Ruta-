import '../Css/Contact.css'

export function Contact() {
  return (
    <form>
      <h2>Contactanos, tu opinion es valiosa!</h2>
      <div>
        <label htmlFor="Name">Nombre</label>
        <input type="text" id="Name" name="Name" placeholder="Nombre" className='Complete' />
      </div>
      <div>
        <label htmlFor="Apellido">Apellido</label>
        <input type="text" id="Apellido" name="Apellido" placeholder="Apellido" className='Complete' />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" name="Email" placeholder="Email" className='Complete' />
      </div>
      <div>
        <label htmlFor="Message">Mensaje</label>
        <textarea id="Message" name="Message" placeholder="Dejános tu comentario!" cols={30} rows={5} className='Complete' />
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}