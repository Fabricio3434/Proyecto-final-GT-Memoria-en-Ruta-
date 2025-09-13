import { useEffect, useRef, useState } from 'react'
import './carrusel.css'
// fotos
import avion from './imagenes/avion.jpg'
import banana from './imagenes/banana.jpg'
import codri from './imagenes/codri.jpg'
import { Botond } from './botond'
import { Botoni } from './botoni'
//...
export function Carrusel(){
    const [index, setIndex] = useState(0)
    const Listref= useRef()
    const datos = [
    {
        id: 1,
        img: avion,
        "titulo": "ARMAMOS TU VIAJE",
        "descripcion": "viaja seguro con nosotros"
    },
    {
        id: 2,
        img: banana,
        "titulo": "ORGANIZA TU VIAJE",
        "descripcion": "te ayudamos"
    },
    {
        id: 3,
        img: codri,
        "titulo": "ORGANIZA TU VIAJE",
        "descripcion": "te ayudamos"
    }
]
//useeffect
useEffect(()=>{
const List = Listref.current
const img= List.querySelectorAll("li > img")
const p = img[index]
if(p){
    p.scrollIntoView({
        behavior:"smooth"
    })
}
}, [index])
//
const mover= (direccion)=>{
    if(direccion=== 'antes'){
setIndex(curr =>{ 
const primeraimg= curr===0
    return primeraimg ? datos.length - 1 : curr - 1
})
    }
    else{
        setIndex(curr=> {
        const ultimaimg = curr=== datos.length -1
        return ultimaimg ? 0 : curr + 1 
    })
        
    }
}
//lo que retorna la función 
    return(
    <>
   <div className="margen">
<div className='contenedor'>
    <Botond onClick={()=>mover('despues')} className="boton_carrusel derecho"/>
    <Botoni onClick={()=>mover('antes')} className="boton_carrusel izquierdo"/>
    <div className='img'>
<ul ref={Listref}>
{
    datos.map((item)=>{
        return <li key= {item.id}>
            <img src= {item.img} width={400} height={400}/>
        </li>
    })
}
</ul>
    </div>

</div>
   </div>

    </>)
}