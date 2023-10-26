import React from 'react'
import './Logo.css'
import Foto from '../../../../public/FotoDaniel.png'
import Foto2 from '../../../../public/FotoDaniel2-editada.png'

function Logo(){

  return (
    <div className='container'>
      <img src={Foto} alt="" className='logo'/>
    </div>
  )
}


export default Logo