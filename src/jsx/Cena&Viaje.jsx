import '../css/Cena&Viaje.css'
import {
    cenaBronce, cenaOro, cenaPlata, viajeAmérica, viajeEuropa, viajeOceanía
} from '../js/image'
import { Link } from "react-router-dom";
import { Organizar, Organizar2 } from '../js/componentes'

//Página de cenas
export function DinnerCards() {
    return (
        <div>
            <div>
                <h1>¡ELEGÍ LA OPCIÓN QUE MÁS TE GUSTE Y COMENZÁ A ORGANIZAR TU CENA!</h1>

            </div>
            <div className="cards-container">
                <div className="bronzeCard">
                    <div>
                        <img src={cenaBronce} alt="" />
                        <div id='info'>
                            <p>Una propuesta pensada para disfrutar una noche inolvidable
                                sin dejar de lado lo esencial. Incluye ambientación elegante,
                                menú principal completo y servicio de mesa profesional.
                                Ideal para quienes buscan celebrar con estilo y compartir
                                una velada especial junto a su promo.</p>
                        </div>
                        <div id='org-conteiner'>
                            <Link to='/organizeDinner'>
                                <button id='org'>Organizar</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="silverCard">
                    <div>
                        <img src={cenaPlata} alt="" />
                        <div id='info'>
                            <p>La combinación perfecta entre elegancia y confort.
                                Incluye un menú más elaborado, bebidas de las mejores marcas,
                                decoración personalizada y detalles que realzan la experiencia.
                                Una opción equilibrada para quienes quieren vivir una noche con
                                un toque extra de distinción.</p>
                        </div>
                        <div id='org-conteiner'>
                            <Link to='/organizeDinner'>
                                <button id='org'>Organizar</button>
                            </Link>                        </div>
                    </div>
                </div>

                <div className="goldCard">
                    <div>
                        <img src={cenaOro} alt="" />
                        <div id='info'>
                            <p>Una experiencia exclusiva diseñada para convertir la noche en
                                algo inolvidable. Incluye menú gourmet, ambientación temática,
                                show en vivo, servicio preferencial y regalos especiales
                                para los egresados.   La forma más completa y elegante de cerrar esta etapa con todo el brillo que merece.</p>
                        </div>
                        <div id='org-conteiner'>
                            <Link to='/organizeDinner'>
                                <button id='org'>Organizar</button>
                            </Link>                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Página de viajes 
export function TravelCards() {
    return (
        <div>
            <div>
                <h1>¡ELEGÍ EL SET QUE MÁS TE GUSTE Y COMENZÁ A ORGANIZAR TU VIAJE!</h1>
            </div>
            <div className='cards-container'>
                <div className='americaTrip tripSet'>
                    <div className="imgContainer">
                        <img src={viajeAmérica} alt="" />
                        <Link to='/organizeTravel'>
                            <button id='org'>Organizar</button>
                        </Link>                    </div>
                    <div className="textContainer">
                        <p>Una travesía que combina aventura, cultura y naturaleza en su
                            máxima expresión. Desde los paisajes místicos de Machu Picchu hasta
                            la energía tropical de Brasil y las maravillas naturales del
                            continente. Un viaje vibrante, lleno de historia, colores y
                            experiencias únicas junto a tu grupo.</p>
                    </div>
                </div>
                <div className='europeTrip tripSet'>
                    <div className="imgContainer">
                        <img src={viajeEuropa} alt="" />
                        <Link to='/organizeTravel'>
                            <button id='org'>Organizar</button>
                        </Link>                    </div>
                    <div className="textContainer">
                        <p>El destino ideal para quienes buscan historia, arte y elegancia
                            en cada rincón. Caminar por las calles de París, Roma o Londres
                            se convierte en una experiencia inolvidable, rodeada de arquitectura icónica y cultura viva.
                            Un viaje que combina lo clásico y lo moderno, pensado para dejar
                            huella.</p>
                    </div>
                </div>
                <div className='oceaniaTrip tripSet'>
                    <div className="imgContainer">
                        <img src={viajeOceanía} alt="" />
                        <Link to='/organizeTravel'>
                            <button id='org'>Organizar</button>
                        </Link>                    </div>
                    <div className="textContainer">
                        <p>Una experiencia distinta, donde la naturaleza y la modernidad se
                            encuentran. Desde los paisajes de Nueva Zelanda hasta las costas
                            australianas, cada destino invita a explorar y descubrir un mundo
                            lleno de vida y color. Un viaje relajado, exótico y perfecto para
                            quienes buscan algo verdaderamente especial.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Sub páginas

//Cena
export function OrganizarC() {
    return (
        <Organizar />
    )
}

//Viaje
export function OrganizarV() {
    return (
        <Organizar2 />
    )
}