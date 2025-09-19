import { useRef } from 'react'
import '../css/Carrusel.css'
//las fotos
import avion from '../private/avion.jpg'
import banana from '../private/banana.jpg'
import codri from '../private/codri.jpg'


export function Carrusel() {
    const carruselRef = useRef(null)
    //para el boton derecho (avanzar)
    const moverDerecha = () => {
        const carrusel = carruselRef.current
        const primerContenido = document.querySelectorAll(".contenido")[0]
        carrusel.style.marginLeft = "-200%"
        carrusel.style.transition = "all 0.5s"
        setTimeout(() => {
            carrusel.style.transition = "none"
            carrusel.insertAdjacentElement('beforeend', primerContenido)
            carrusel.style.marginLeft = "-100%"
        }, 500)
    }
    //Para el boton izquierdo (retroceder)
    const moverIzquierda = () => {
        const carrusel = carruselRef.current
        const contenido = document.querySelectorAll(".contenido")
        const ultimoContenido = contenido[contenido.length - 1]
        carrusel.style.marginLeft = "0"
        carrusel.style.transition = "all 0.5s"
        setTimeout(() => {
            carrusel.style.transition = "none"
            carrusel.insertAdjacentElement('afterbegin', ultimoContenido)
            carrusel.style.marginLeft = "-100%"
        }, 500)
    }
    return (
        <>
            <div className='contenedor'>
                <div className='carrusel' ref={carruselRef}>
                    <div className="contenido">
                        <img src={avion} alt='' className='img' />
                    </div>
                    <div className="contenido">
                        <img src={banana} alt='' className='img' />
                    </div>
                    <div className="contenido">
                        <img src={codri} alt='' className='img' />
                    </div>
                </div>

                <button className='botones' id='izq' onClick={moverIzquierda}> A </button>
                <button className='botones' id='der' onClick={moverDerecha}> D </button>

            </div>
        </>

    )
}

export default Carrusel;