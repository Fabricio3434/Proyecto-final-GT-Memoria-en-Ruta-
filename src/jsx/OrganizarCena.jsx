import { useLocalStorage } from './useLocalStorage'
import '@/css/Formularios.css'

export function Organizar() {
  const provincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa",
    "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Río Negro", "Salta", "San Juan", "San Luis",
    "Santa Cruz", "Santa Fé", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
  ]
  const [info, setInfo] = useLocalStorage('info', {
    nombre: " ",
    email: " ",
    cena: " ",
    provincia: " ",
    indicaciones: ""
  })
  const guardar = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }
  return (
    <>
      <section className='indicar'>
        <h2>¡Completa el formulario para iniciar con Memoria en Ruta!</h2>
        <p>Completa el formulario con tus preferencias y contacto, a lo largo de los
          próximos cinco días hábiles, la empresa se pondrá en contacto para poder empezar a organizar la cena de tus sueños.
        </p>
      </section>
      <section className="alinear">
        <form className='Formulario'>
          <fieldset className='field'>
            <legend>Datos de contacto</legend>
            <div className='color'>
              <input type="text"
                placeholder='Introducir nombre'
                name='nombre'
                value={info.nombre}
                onChange={guardar}
              />
            </div>
            {/* */}
            <div className='color'>
              <input type="email"
                placeholder='Introducir email'
                name='email'
                value={info.email}
                onChange={guardar}
                required
              />
            </div>
          </fieldset>
          {/* */}
          <fieldset className='field'>
            <legend>Sobre tu cena</legend>
            <div>
              <label htmlFor="cenas" className='la'> Elegí tu cena </label>
              <select name="cena" id="C"
                value={info.cena}
                onChange={guardar}
                required
              >
                <option value="Oro">Cena de Oro</option>
                <option value="Plata">Cena de Plata</option>
                <option value="Bronce">Cena de Bronce</option>
              </select>
            </div>
            {/* */}
            <div>
              <label htmlFor="provincia" className='la'>Escoge tu provincia</label>
              <select name="provincia" id="P"
                value={info.provincia}
                onChange={guardar}
                required
              >
                {provincias.map(prov => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>

            <label htmlFor="indicaciones" className="la">¿Algunas especificaciones que debamos saber?</label>
            <div className='alinear2'>
              <textarea id='t' name="indicaciones" placeholder='Alergías, Condiciones Médicas. Caso contrario indicar simplemente "no"'
                maxLength={50}
                value={info.indicaciones} onChange={guardar}></textarea>
            </div>
          </fieldset>
          <ul className='ul'>
            <h5>Verifica que la información sea correcta, antes de enviar</h5>
            <li>Nombre: {info.nombre}</li>
            <li>Email: {info.email}</li>
            <li>Cena: {info.cena}</li>
            <li>Provincia: {info.provincia}</li>
            <li>Indicaciones médicas: {info.indicaciones}</li>
          </ul>

          <div >
            <input className="envio"
              type="submit"
              value="enviar"
            />
          </div>

          {/* Div del contenedor*/}
        </form>
      </section>
    </>
  )
}