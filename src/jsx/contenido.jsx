import '../css/Carrusel.css'
export function Contenido({ src, alt, texto = [] }) {
    return (
        <>
            <div className="contenido">
                <img src={src} alt={alt} className="img" />
                <div className="texto">
                    {texto.map((linea, i) => (
                        <p key={i}>{linea}</p>
                    ))}
                </div>
            </div>
        </>

    )
}
