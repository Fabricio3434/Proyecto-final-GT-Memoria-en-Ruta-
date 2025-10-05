import '../css/Sections.css'
import '../css/Footer.css'

//Sección de cenas
export function DinnerSection() {
    return (
        <div>
            <div id='d-t'>
                <h1>¡Organizá tu viaje o cena de egresados con nosotros!</h1>
                <p>Elegí entre los viajes y cenas más populares o echale un vistazo a
                    las demás opciones.</p>
            </div>
            <div className='section'>
                <section className="cenas">
                    <h2>Cenas</h2>
                    <p>Éstas son las cenas más buscadas:</p>

                    <div className="destinos">
                        <div className="destino">
                            <img src="https://via.placeholder.com/250x150" alt="Cena 1" />
                            <h3>Cena en Buenos Aires</h3>
                        </div>
                        <div className="destino">
                            <img src="https://via.placeholder.com/250x150" alt="Cena 2" />
                            <h3>Cena en Córdoba</h3>
                        </div>
                        <div className="destino">
                            <img src="https://via.placeholder.com/250x150" alt="Cena 3" />
                            <h3>Cena en Rosario</h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


//Sección de viajes
export function TravelSection() {
    return (
        <div>
            <div className='section'>
                <section className="viajes">
                    <h2>Viajes</h2>
                    <p>Éstos son los destinos más buscados:</p>

                    <div className="destinos">
                        <div className="destino">
                            <img src="https://via.placeholder.com/250x150" alt="Destino 1" />
                            <h3>París</h3>
                        </div>
                        <div className="destino">
                            <img src="https://via.placeholder.com/250x150" alt="Destino 2" />
                            <h3>Roma</h3>
                        </div>
                        <div className="destino">
                            <img src="https://via.placeholder.com/250x150" alt="Destino 3" />
                            <h3>Tokio</h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}