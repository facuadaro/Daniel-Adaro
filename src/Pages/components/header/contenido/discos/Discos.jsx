import React from 'react'
import Originales from './originales/Originales'
import Participaciones from './participaciones/Participaciones'
import './Discos.css'

function Discos() {


    return (
        <main className='discos'>
            <article className="discosorig">
                <Originales />
            </article>
            <article className="participaciones">
                <Participaciones />
            </article>
        </main>
    )
}

export default Discos