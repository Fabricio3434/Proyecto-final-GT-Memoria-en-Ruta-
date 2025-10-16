import '../css/Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div>
                <p id='agradecimientos1'>Créditos y agradecimientos a:</p>
                <ul id='agradecimientos2'>
                    <li>El profe Lucio Petrucci</li>
                    <li>Fabricio Vedia Vega ---- (Fabri)</li>
                    <li>Lucia Mamanis ---- (Luci)</li>
                    <li>Nahuel Menrath ---- (Nanu)</li>
                    <li>Tizina Acosta ---- (Tizi)</li>
                    <li>Ezequiel Claveriz ---- (Eze)</li>
                </ul>
            </div>
            <div id='copyright'>
                © 2025 Memoria en Ruta - Todos los derechos reservados
            </div>
        </footer>
    )
}