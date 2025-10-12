import avion from '../private/avion.jpg'
import '../css/Cena&Viaje.css'
import { cenaBronce, cenaOro, cenaPlata } from '../js/image'

//Página de cenas
export function DinnerCards() {
    return (
        <div id="menu-cards">
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
                            <button id='org'>Organizar</button>
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
                            <button id='org'>Organizar</button>
                        </div>
                    </div>
                </div>

                <div className="goldCard">
                    <div>
                        <img src={cenaOro} alt="" />
                        <div id='info'>
                            <p>Una experiencia exclusiva diseñada para convertir la noche en algo inolvidable.
                                Incluye menú gourmet, ambientación temática, show en vivo, servicio preferencial y regalos especiales para los egresados.
                                La forma más completa y elegante de cerrar esta etapa con todo el brillo que merece.</p>
                        </div>
                        <div id='org-conteiner'>
                            <button id='org'>Organizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Página de viajes 
export function Travel() {
    return (
        <div></div>
    )
}