import { useLocalStorage } from "./useLocalStorage"
export function Organizar2(){
const provincias = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa",
  "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Río Negro", "Salta", "San Juan", "San Luis", 
  "Santa Cruz", "Santa Fé", "Santiago del Estero", "Tierra del Fuego", "Tucumán"
]
const [info, setInfo] = useLocalStorage('info', {
nombre: " ",
email: " ",
viaje: " ",
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
    name="nombre"
    value={info.nombre}
    onChange={guardar}
    />
</div>
{/* */}
<div>
    <input type="email" 
    name="email"
    value={info.email}
    onChange={guardar}
    />
</div>
{/* */}
<label htmlFor="viaje"> Elige tu viaje</label>
<select name="viaje" 
id="V"
value={info.viaje}
onChange={guardar}
>
<option value="Set-América del Sur">Set-América del Sur</option>
<option value="Set-Europa">Set-Europa</option>
<option value="Set-Patagonia, Bariloche">Set-Patagonia,Bariloche</option>
<option value="Set-Asia">Set-Asia</option>
<option value="Set-Australia">Set-Australia</option>
</select>
{/* */}
<label htmlFor="provincias">Selecciona tu provincia</label>
<select name="provincia" 
id="p"
value={info.provincia}
onChange={guardar}
>
{provincias.map(prov =>(
  <option key={prov} value={prov}>{prov}</option>
))}
</select>
<ul>
    <h5>Verifica que la información sea correcta</h5>
    <li>{info.nombre}</li>
    <li>{info.email}</li>
    <li>{info.viaje}</li>
    <li>{info.provincia}</li>
</ul>
<div className="enviar">
    <input type="submit" value="enviar" />
</div>
        </form>
        </>
    )
}