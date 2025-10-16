import '../css/Sections.css'
import '../css/Footer.css'
import { DinnerCards, TravelCards } from '../js/componentes'

//Sección de cenas
export function DinnerSection() {
    return (
        <>
            <div>
                <div id='d-t'>
                    <h1>¡Organizá tu viaje o cena de egresados con nosotros!</h1>
                </div>
                <div className='section'>
                    <section className="cenas">
                        <DinnerCards />
                    </section>
                </div>
            </div >
        </>
    )
}


//Sección de viajes
export function TravelSection() {
    return (
        <>
            <div>
                <div className='section'>
                    <section className="viajes">
                        <TravelCards />
                    </section>
                </div>
            </div >
        </>
    )
}