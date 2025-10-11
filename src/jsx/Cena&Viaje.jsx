import { Link } from 'react-router-dom';

//Cena

export function OrganizarCena() {
    return (
        <Link to="/organizeDinner">
            <button id="organize">Organizar mi cena!</button>
        </Link>
    )
}

export function OrganizarViaje() {
    return (
        <Link to="/organizeTravel">
            <button id="organize">Organizar mi viaje!</button>
        </Link>
    )
}