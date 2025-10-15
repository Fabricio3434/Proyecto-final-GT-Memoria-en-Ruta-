
import {useLocalStorage} from './useLocalStorage'
export function Organizar (){
const provincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa",
  "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Río Negro", "Salta", "San Juan", "San Luis", 
  "Santa Cruz", "Santa Fé", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
]
const [info, setInfo] = useLocalStorage('info', {
nombre: " ",
email: " ",
cena: " ",
provincia: " "
})
const guardar = (e)=>{
  const {name, value} = e.target
  setInfo({...info, [name]: value})
}
    return(
       <>
       <form>
      <div>
        <input type="text" 
        placeholder='Introducir nombre'
        name='nombre'
        value={info.nombre}
        onChange={guardar}
        />
      </div>
      {/* */}
      <div>
        <input type="email" 
        name='email'
        value={info.email}
        onChange={guardar}
        required
        />
      </div>
      {/* */}
    <div className="dinner">
      <label htmlFor="cenas"> Elegí tu cena </label>
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
       <div className="lugar">
       <label htmlFor="provincia">Escoge tu provincia</label>
<select name="provincia" id="P"
value={info.provincia}
onChange={guardar}
required
>
{provincias.map(prov =>(
  <option key={prov} value={prov}>{prov}</option>
))}
</select>
</div>
<ul>
  <h5>Verifica que la información sea correcta, antes de enviar</h5>
  <li>{info.nombre}</li>
  <li>{info.email}</li>
  <li>{info.cena}</li>
  <li>{info.provincia}</li>
</ul>

<div className="enviar">
<input 
type="submit" 
value="enviar" 
/>
</div>

{/* Div del contenedor*/}
 </form>
       </>
    )
}