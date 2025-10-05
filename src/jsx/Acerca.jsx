import { useState } from 'react'
import '../css/Acerca.css'
import cenas from '../private/cenas.jpg'
import viajes from '../private/viajes.jpg'
import empresa from '../private/empresa.jpg'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
export function AcercaDeNosotros() {
const [voltear, setVoltear] = useState(false)
const [voltear2, setVoltear2] = useState(false)
const [voltear3, setVoltear3] = useState(false)
const cambiar = ()=>{
  setVoltear(!voltear)
}
const cambiar2 = ()=>{
  setVoltear2(!voltear2)
}
const cambiar3 =()=>{
  setVoltear3(!voltear3)
}
  return (
    <>
    <section className='acomodar'>
      <div className="envase">
        <div className={`carta ${voltear ? "voltear" : ""}`}>
          <div className="photos adelante">
            <img src={empresa} alt="avion" className="imagenes" />
            <h1 className='titulo'id='primero'>Quienes somos</h1>
          </div>

          <div className="photos atras">
            <p> Somos una empresa especializada en la organización de cenas y viajes para egresados de diferentes provincias a lo largo del país.
              Fundada recientemente, contamos con un sistema de formularios de planificación de reuniones para ayudarte a organizar el viaje
              y cena de tus sueños.
            </p>
          </div>
        </div>
        <div className='centrarboton'>
        <button className='girar' onClick={cambiar}>
ver más
        </button>
        </div>
      </div>
     {/*Segundo */}
     <div className="envase">
        <div className={`carta ${voltear2 ? "voltear" : ""}`}>
          <div className="photos adelante">
            <img src={viajes} alt="avion" className="imagenes" />
              <h1 className='titulo' id='segundo'>Viajes</h1>
          </div>

          <div className="photos atras">
            <p> Contamos con distintos destinos a lo largo del país y del mundo. Incluyendo paquetes con sets 
              turistícos a Europa, Asía, América del sur e incluso Oceanía
            </p>
          </div>
        </div>
        <div className='centrarboton'>
        <button className='girar' onClick={cambiar2}>
ver más
        </button>
        </div>
      </div>
      {/* Tercero */}
      <div className="envase">
        <div className={`carta ${voltear3 ? "voltear" : ""}`}>
          <div className="photos adelante">
            <img src={cenas} alt="avion" className="imagenes" />
             <h1 className='titulo' id='tercero'>Cenas</h1>
          </div>
          <div className="photos atras">
            <p> Planificamos tu cena en el mejor lugar en tu areá de residencia, con catering y demás servicios incluidos</p>
          </div>
        </div>
        <div className="centrarboton">
        <button className='girar' onClick={cambiar3}>
ver más
        </button>
        </div>
      </div>
      </section>
      <div id='alinearh2'>
      <h2 id='h2'> Fundadores </h2>
      </div>
      <section id='seccion2'>
        <Stack direction="row" spacing={6}>
        <Avatar
        sx={{width: 80, height: 80, margin:50, fontSize: 40, backgroundColor: 'orange'}}
        >F</Avatar>
       <ul id='F'>
        <li>Fabri</li>
        <li> Referente</li>
        <li>Navbar</li>
        <li>Pág.Contactos</li>
       </ul>
   
        <Avatar
        sx={{width: 80, height:80, fontSize: 40, backgroundColor: 'blue' }}
        >L</Avatar>
        <ul id='L'>
          <li>Luci</li>
          <li>Carrusel de img</li>
          <li>Pág. Acerca De</li>
        </ul>
        <Avatar
         sx={{width: 80, height:80, fontSize: 40, backgroundColor: 'purple' }}
        >N</Avatar>
        <ul id='N'>
          <li>Nanu</li>
          <li>Secciones de cenas y viajes</li>
          <li>Footer</li>
        </ul>
        <Avatar
         sx={{width: 80, height:80, fontSize: 40, backgroundColor: 'pink' }}
        >T</Avatar>
        <ul id='T'>
          <li>Tizi</li>
          <li>...</li>
        </ul>
        <Avatar
         sx={{width: 80, height:80, fontSize: 40, backgroundColor: 'green' }}
        >E</Avatar>
        <ul id='E'>
          <li>Ezequiel</li>
          <li>...</li>
        </ul>
        </Stack>
      </section>
    </>
  )
}
