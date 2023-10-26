import React, { useState } from 'react'
import OriginalesJSON from '../Originales.json'
import { useNavigate, useParams } from 'react-router-dom';
import './Particular.css'
import 'material-icons/iconfont/material-icons.css';

function Particular() {

  const { id } = useParams();
  const Originales = OriginalesJSON.find((item) => item.id === parseInt(id));
  const navigate = useNavigate()

  console.log(Originales)

  const back = () => {
    navigate('/discos')
  }

  // const volumeIcon = document.getElementById('volumen');
  // const volumeBar = document.getElementById('barra-volumen');


  // const [audio, setAudio] = useState(null)
  // const [currentTrack, setCurrentTrack] = useState(null)
  const [volume, setVolume] = useState(1)

  const [url, setUrl] = useState(null)
  const [reproductor, setReproductor] = useState(false)
  const [cancion, setCancion] = useState(false)
  const [controles, setControles] = useState(false)


  const mostrarDescripcion = (src) => {
    if (url === src) {
      setUrl(null);
      setCancion(false);
      setControles(false);
      setReproductor(false);
    } else {
      setUrl(src)
      setReproductor(true)
      setCancion(true)
      setControles(true)
    }
  }

  return (
    <main className='particulargral'>
      <div className='volver-resp'>
        <button onClick={back} className='back back-resp'>Volver atras</button>
      </div>
      <h1>{Originales.nombre}</h1>
      <article className="icono-canciones">
        <div className="separador">
          <div className="disco">
            <div className="imagen-disco">
              <img src={Originales.imagen} alt={Originales.nombre} />
            </div>
            <div className="barra-separador">

            </div>
          </div>
        </div>
        <div className="canciones">
          <ul>
            {Object.keys(Originales.canciones).map((temaKey, index) => (
              <li key={index}>
                <section className="nombres-gral">
                  <div className={`nombre-cancion ${cancion && url === Originales.canciones[temaKey] ? 'cancionOn' : ''}`} id='titulo-cancion' onClick={() => mostrarDescripcion(Originales.canciones[temaKey])}>
                    <h2>{Originales.descripcion[temaKey]}</h2>
                  </div>
                  <div className={`play ${controles && url === Originales.canciones[temaKey] ? 'controlesOn' : ''}`} id='reproductor'>
                    <div className="material-icons" id='play'>
                      play_circle
                    </div>
                    <div className="material-icons" id='pause'>
                      pause
                    </div>
                    <div className="volumen-gral">
                      <div className="material-icons" id='volumen'>
                        volume_up
                        <input type="range" max="1" min="0" step="0.01" className='volumen' id='barra-volumen' value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} />
                      </div>
                    </div>
                  </div>
                </section>
                <section className={`info-canciones  ${reproductor && url === Originales.canciones[temaKey] ? 'isActive' : ''}`}>
                  <div className="titulo">
                    <h3>{Originales.descripcion[temaKey]}</h3>
                  </div>
                  <div className="descripciones">
                    <h4>Autor: <span>Daniel Adaro</span></h4>
                    <h4>Año: <span>1998</span></h4>
                  </div>
                </section>
              </li>

            ))}
          </ul>
        </div>
      </article>
      <div className='volver'>
        <button onClick={back} className='back'>Volver atras</button>
      </div>
    </main>
  )
}

export default Particular