import { useRef } from 'react'
import '../css/Carrusel.css'
//las fotos
import avion from '../private/avion.jpg'
import banana from '../private/banana.jpg'
import codri from '../private/codri.jpg'

//El carrusel
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

    const información = [{ src: avion, alt: "avión", texto: ["un avión", "avioncito"] },
    { src: banana, alt: "banana", texto: ["una banana"] },
    { src: codri, alt: "codri", texto: ["un cocodrilo", "en el agua"] }
    ]
    return (
        <>
            <div className='contenedor'>
                <div className='carrusel' ref={carruselRef}>
                    {información.map((item, index) => (
                        <Contenido
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            texto={item.texto}
                        />
                    ))}
                </div>
                <Botond onClick={moverDerecha} />
                <Botoni onClick={moverIzquierda} />
            </div>
        </>

    )
}

//Botones
//Botón izquierdo
export function Botoni({ onClick }) {
    return (
        <button onClick={onClick} className="botones" id="izq"> 🡸 </button>
    )
}

//Botón derecho
export function Botond({ onClick }) {
    return (
        <button onClick={onClick} className="botones" id="der"> 🡺 </button>
    )
}

//Contenido del carrusel (la foto y el texto)
export function Contenido({ src, alt, texto = [] }) {
    return (
        <>
            <div className="contenido">
                <img src={src} alt={alt} className="img" />
                <div className="texto">
                    {texto.map((linea, i) => (
                        <p key={i}>{linea}</p>
                    ))}
                </div>
            </div>
        </>

    )
}