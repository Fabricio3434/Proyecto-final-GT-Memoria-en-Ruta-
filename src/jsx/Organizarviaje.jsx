import { useLocalStorage } from "./useLocalStorage"
import '@/css/Formularios.css'

export function Organizar2() {
  const provincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa",
    "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Río Negro", "Salta", "San Juan", "San Luis",
    "Santa Cruz", "Santa Fé", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
  ]
  const [info, setInfo] = useLocalStorage('infoviajes', {
    nombre: " ",
    email: " ",
    viaje: " ",
    provincia: " "
  })
  const guardar = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }
  return (
    <>
      <section className='indicar'>
        <h2>¡Completa el formulario para iniciar con Memoria en Ruta!</h2>
        <p>En los próximos cinco días hábiles te estaremos contactando para
          definir juntos los detalles del viaje de tus sueños.
        </p>
      </section>
      <section className="alinear">
        <form className="Formulario">
          <fieldset className="field">
            <legend>Datos de contacto</legend>
            <div className="color">
              <input type="text"
                placeholder="Introducir nombre"
                name="nombre"
                value={info.nombre}
                onChange={guardar}
              />
            </div>
            {/* */}
            <div className="color">
              <input type="email"
                name="email"
                value={info.email}
                onChange={guardar}
                placeholder="Introducir email"
              />
            </div>
          </fieldset>
          {/* */}
          <fieldset className="field">
            <legend>Sobre tu viaje</legend>
            <div>
              <label htmlFor="viaje" className="la">Elige tu viaje</label>
              <select
                name="viaje"
                id="V"
                value={info.viaje}
                onChange={guardar}
              >
                <option value="Set-América del Sur">Set-América del Sur</option>
                <option value="Set-Europa">Set-Europa</option>
                <option value="Set-Oceanía">Set-Oceanía</option>
              </select>
            </div>
            {/* */}
            <div>
              <label htmlFor="provincias" className="la">Selecciona tu provincia</label>
              <select name="provincia"
                id="p"
                value={info.provincia}
                onChange={guardar}
              >
                {provincias.map(prov => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>
          </fieldset>
          <ul className="ul">
            <h5>Verifica que la información sea correcta</h5>
            <li>{info.nombre}</li>
            <li>{info.email}</li>
            <li>{info.viaje}</li>
            <li>{info.provincia}</li>
          </ul>
          <div>
            <input type="submit" value="enviar" id="sent" />
          </div>
        </form>
      </section >
    </>
  )
}