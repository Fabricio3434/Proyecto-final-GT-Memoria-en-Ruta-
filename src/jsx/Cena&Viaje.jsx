import avion from '../private/avion.jpg'
import '../css/Cena&Viaje.css'

//Página de cenas
export function DinnerCards() {
    return (
        <div id="menu-cards">
            <div>
                <h1>¡ELEGÍ LA OPCIÓN QUE MÁS TE GUSTE Y COMENZÁ A ORGANIZAR TU CENA!</h1>

            </div>
            <div className="books-container">
                <div className="book">
                    <div>
                        <img src={avion} alt="" />
                        <div id='info'>
                            <p>Precio: $80.000</p>
                            <p>Ubicación: Bs. As, Cdad. Autónoma de Bs As</p>
                        </div>
                        <div id='org-conteiner'>
                            <button id='org'>Organizar</button>
                        </div>
                    </div>
                    <div className="cover">
                        <p>Cena en Buenos Aires</p>
                    </div>
                </div>

                <div className="book">
                    <div>
                        <img src={avion} alt="" />
                        <div id='info'>
                            <p>Precio: $80.000</p>
                            <p>Ubicación: Bs. As, Cdad. Autónoma de Bs As</p>
                        </div>
                        <div id='org-conteiner'>
                            <button id='org'>Organizar</button>
                        </div>
                    </div>
                    <div className="cover">
                        <p>Cena en Buenos Aires</p>
                    </div>
                </div>

                <div className="book">
                    <div>
                        <img src={avion} alt="" />
                        <div id='info'>
                            <p>Precio: $80.000</p>
                            <p>Ubicación: Bs. As, Cdad. Autónoma de Bs As</p>
                        </div>
                        <div id='org-conteiner'>
                            <button id='org'>Organizar</button>
                        </div>
                    </div>
                    <div className="cover">
                        <p>Cena en Buenos Aires</p>
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