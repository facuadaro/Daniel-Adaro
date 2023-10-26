import React, { useState } from 'react'
import './ContentPrensa.css'
import PrensaInfo from '../Prensa.json'
import { useNavigate, useParams } from 'react-router-dom'

function ContentPrensa() {

  const { id } = useParams();
  const prensaItem = PrensaInfo.find((item) => item.id === parseInt(id));
  const navigate = useNavigate()

  console.log(prensaItem)

  const back = () => {
     navigate('/prensa')
  }

  if (!prensaItem) {
    // Manejar el caso si no se encuentra el artículo
    return <div>Artículo no encontrado</div>;
  }



    return (
      <div className='content-prensa'>
          <h1>{prensaItem.info}</h1>
          {prensaItem.image && <img src={prensaItem.image} alt={prensaItem.info}/>}
          {prensaItem.data && <p>{prensaItem.data}</p>}
          <div>
              <button onClick={back} className='back'>Volver atras</button>
          </div>
      </div>
    )

}

export default ContentPrensa