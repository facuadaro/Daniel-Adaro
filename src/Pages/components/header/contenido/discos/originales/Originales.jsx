import React from 'react'
import './Originales.css'
import OriginalesJSON from './Originales.json'
import { Link } from 'react-router-dom'
import Particular from './particulares/Particular'


function Originales() {

    // const discoParticular = () {

    // }

    return (
        <div id='orig-container'>
            <h2>Discos</h2>
            <article>
                {OriginalesJSON.map((original, index) => (
                    <div className='orig' id={`orig${index}`} key={index}>
                        <Link to={`/discos/${original.id}`}>
                            <img src={original.imagen} alt={original.nombre} />
                            <div className="centro">
                                
                            </div>
                        </Link>
                    </div>
                ))}
            </article>
        </div>

    )
}

export default Originales