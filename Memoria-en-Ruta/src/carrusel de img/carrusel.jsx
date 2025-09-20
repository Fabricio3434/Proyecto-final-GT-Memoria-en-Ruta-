import { useRef } from 'react'
import './carrusel.css'
//las fotos
import avion from './imagenes/avion.jpg'
import banana from './imagenes/banana.jpg'
import codri from './imagenes/codri.jpg'
//
import { Botoni } from './botoni'
import { Botond } from './botond'
import { Contenido } from './contenido'

export function Carrusel(){
const carruselRef = useRef(null)
//para el boton derecho (avanzar)
const moverDerecha = ()=>{
    const carrusel = carruselRef.current
    const primerContenido = document.querySelectorAll(".contenido")[0]
    carrusel.style.marginLeft = "-200%"
    carrusel.style.transition = "all 0.5s"
    setTimeout(()=>{
        carrusel.style.transition = "none"
        carrusel.insertAdjacentElement('beforeend', primerContenido)
        carrusel.style.marginLeft = "-100%"
    }, 500)
}
//Para el boton izquierdo (retroceder)
const moverIzquierda = ()=> {
    const carrusel = carruselRef.current
    const contenido = document.querySelectorAll(".contenido")
    const ultimoContenido = contenido[contenido.length - 1]
    carrusel.style.marginLeft = "0"
    carrusel.style.transition = "all 0.5s"
    setTimeout(()=>{
      carrusel.style.transition = "none"
      carrusel.insertAdjacentElement('afterbegin', ultimoContenido)
      carrusel.style.marginLeft = "-100%"
    }, 500)
}
const información = [
    {src: avion, alt:"", texto: ["un avión", "avioncito"]},
    {src: banana, alt:"", texto: ["una banana"]},
    {src: codri, alt: "", texto: ["un cocodrilo", "en el agua"]}
]

return (
    <>
<div className='contenedor'>
<div className='carrusel' ref={carruselRef}>
{información.map((item, index)=>(
   <Contenido
   key={index}
   src={item.src}
   alt={item.alt}
   texto= {item.texto}
   /> 
))}
</div>
<Botoni onClick={moverIzquierda}/>
<Botond onClick={moverDerecha}/>
</div>
</>

)

}