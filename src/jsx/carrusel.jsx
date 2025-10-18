import { useRef } from 'react'
import '@/css/Carrusel.css'
//las fotos
import { carruselViaje, mer, carruselCena } from '@/js/image.js'

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

    const información = [
        { src: carruselViaje, alt: "ilustración de un mapa", texto: [""] },
        { src: mer, alt: "logo de memoria en ruta", texto: [""] },
        { src: carruselCena, alt: "cena", texto: [""] }
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