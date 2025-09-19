import '../css/Sections.css'
import '../css/Footer.css'

const DinnerSection = () => {
    return (
        <div className='Carrusel'>
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
    )
}

export default DinnerSection;