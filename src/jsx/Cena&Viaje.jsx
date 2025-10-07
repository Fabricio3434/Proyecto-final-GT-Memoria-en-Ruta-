import avion from '../private/avion.jpg'

//Página de cenas
export function Dinners() {
    return (
        <div id="menu-cards">
            <div>
                <h1>¡ELEGÍ LA OPCIÓN QUE MÁS TE GUSTE Y COMENZÁ A ORGANIZAR TU CENA!</h1>

            </div>
            <div className="books-container">
                <div class="book">
                    <img src={avion} alt="" />
                    <p>Precio: $80.000</p>
                    <p>Ubicación: Bs. As, Cdad. Autónoma de Bs As</p>
                    <button id='org'>ds</button>
                    <div class="cover">
                        <p>Cena en Buenos Aires</p>
                    </div>
                </div>

                <div class="book">
                    <p>Hello</p>
                    <div class="cover">
                        <p>Cena en</p>
                    </div>
                </div>

                <div class="book">
                    <p>Hello</p>
                    <div class="cover">
                        <p>Cena en</p>
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