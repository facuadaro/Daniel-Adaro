import React, { useState } from 'react'
import './Participaciones.css'
import PartData from './Fotos.json'
import { chunkArray } from './funcionArray/chunkedArray';




function Participaciones() {
    return (
        <main id='participacionesgral-container'>
            <h2>Participación como Guitarrista, Arreglador y Director Musical</h2>
            <ul className='participacionesgral'>
                {chunkArray(PartData, 4).map((grupo, index) => (
                    <li key={index} className='resposinve-img materialboxed'>
                        {grupo.map((imagen, subIndex) => (
                            <img key={subIndex} src={imagen.url} alt={imagen.titulo} className={`imagen-${subIndex} imgedit`}/>
                        ))}
                    </li>
                ))}
            </ul>
        </main >
    );
}

export default Participaciones