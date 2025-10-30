import { useLocalStorage } from "./useLocalStorage"
import { useState } from "react";
import emailjs from "emailjs-com";
import '@/css/Formularios.css'

export function Organizar2() {

  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    emailjs.sendForm(
      "service_78xey8u",
      "template_g4dutlc",
      e.target,
      "zAKBS-JL0agE_sUp4"
    ).then(() => {
      setError(false)
      setEnviando(false);
      setMensajeEnviado(true);
      e.target.reset();
      setInfo({
        nombreyapellido: "",
        email: "",
        viaje: "",
        provincia: ""
      });
    }).catch((error) => {
      setError(true)
      setEnviando(false)
    });
  };

  const provincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa",
    "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Río Negro", "Salta", "San Juan", "San Luis",
    "Santa Cruz", "Santa Fé", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
  ]
  const [info, setInfo] = useLocalStorage('infoviajes', {
    nombreyapellido: "",
    email: "",
    viaje: "",
    provincia: ""
  })
  const guardar = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }
  return (
    <>

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

      <section className='indicar'>
        <h2>¡Completa el formulario para iniciar con Memoria en Ruta!</h2>
        <p>En los próximos cinco días hábiles te estaremos contactando para
          definir juntos los detalles del viaje de tus sueños.
        </p>
      </section>
      <section className="alinear">
        <form className="Formulario" onSubmit={handleSubmit}>
          <fieldset className="field">
            <legend>Datos de contacto</legend>
            <div className="color">
              <input type="text"
                placeholder="Introducir nombre y apellido"
                name="nombreyapellido"
                value={info.nombreyapellido}
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
                name="paquete"
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
            <li> Nombre: {info.nombre}</li>
            <li> Email: {info.email}</li>
            <li> Viaje: {info.viaje}</li>
            <li> Provincia: {info.provincia}</li>
          </ul>
          <div>
            <input type="submit" value="enviar" id="sent" />
          </div>
        </form>
      </section >
    </>
  )
}