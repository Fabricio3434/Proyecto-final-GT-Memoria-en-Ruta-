import Usuario from "./Usuario"

const usuarios = [
    { "id": 1, "nombre": "José", "puntaje": 50 },
    { "id": 2, "nombre": "Lucía", "puntaje": 35 },
    { "id": 3, "nombre": "Carlos", "puntaje": 80 },
    { "id": 4, "nombre": "Ana", "puntaje": 42 },
    { "id": 5, "nombre": "Pedro", "puntaje": 67 },
    { "id": 6, "nombre": "Laura", "puntaje": 71 },
    { "id": 7, "nombre": "Andrés", "puntaje": 53 },
    { "id": 8, "nombre": "Camila", "puntaje": 46 },
    { "id": 9, "nombre": "Felipe", "puntaje": 88 },
    { "id": 10, "nombre": "Valentina", "puntaje": 77 },
    { "id": 11, "nombre": "Mateo", "puntaje": 64 },
    { "id": 12, "nombre": "Isabella", "puntaje": 59 },
    { "id": 13, "nombre": "Sofía", "puntaje": 82 },
    { "id": 14, "nombre": "Juan", "puntaje": 99 },
    { "id": 15, "nombre": "María", "puntaje": 20 },
    { "id": 16, "nombre": "Diego", "puntaje": 47 },
    { "id": 17, "nombre": "Manuela", "puntaje": 91 },
    { "id": 18, "nombre": "Daniel", "puntaje": 38 },
    { "id": 19, "nombre": "Sara", "puntaje": 85 },
    { "id": 20, "nombre": "David", "puntaje": 73 },
    { "id": 21, "nombre": "Elena", "puntaje": 41 },
    { "id": 22, "nombre": "Sebastián", "puntaje": 66 },
    { "id": 23, "nombre": "Martina", "puntaje": 60 },
    { "id": 24, "nombre": "Alejandro", "puntaje": 90 },
    { "id": 25, "nombre": "Florencia", "puntaje": 55 },
    { "id": 26, "nombre": "Tomás", "puntaje": 40 },
    { "id": 27, "nombre": "Renata", "puntaje": 79 },
    { "id": 28, "nombre": "Agustín", "puntaje": 68 },
    { "id": 29, "nombre": "Emilia", "puntaje": 62 },
    { "id": 30, "nombre": "Santiago", "puntaje": 74 },
    { "id": 31, "nombre": "Gabriela", "puntaje": 36 },
]

export default function Grilla() {
    return (
        <div className="grilla">
            {
                usuarios.map((usuario) => {
                    return <Usuario id={usuario.id} nombre={usuario.nombre} puntaje={usuario.puntaje} />
                })
            }

        </div>
    )
}
