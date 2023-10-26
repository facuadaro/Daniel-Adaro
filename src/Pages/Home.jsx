import React from 'react'
import Header from './components/header/Header'
import Logo from './components/logo/Logo'
import './Home.css'



function Home() {
  return (
    <div id='contenedor'>
      <div className='tapa'>
      <Logo />
      <footer>
        1975-2014
      </footer>
      </div>
      <div id='rutas'>
        <Header />
      </div>
    </div>
  )
}

export default Home