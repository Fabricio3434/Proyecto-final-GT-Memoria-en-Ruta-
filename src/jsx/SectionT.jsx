import '../css/Sections.css'
import '../css/Footer.css'

const TravelSection = () => {
    return (
       
         <div className='Carrusel'>
            <section className="viajes">
                <h2>Viajes</h2>
                <p>Éstos son los destinos más buscados:</p>

                <div className="destinos">
                    <div class="destino">
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
    )
}

export default TravelSection;