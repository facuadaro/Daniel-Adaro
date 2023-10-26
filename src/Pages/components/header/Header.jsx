import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Biografia from './contenido/biografia/Biografia'
import Discos from './contenido/discos/Discos'
import Fotos from './contenido/Fotos/Fotos'
import Prensa from './contenido/prensa/Prensa'
import Logo from '../../../../public/logo.png'
import Videos from './contenido/vide0s/Videos'
import ContentPrensa from './contenido/prensa/contentPrensa/ContentPrensa'
import Particular from './contenido/discos/originales/particulares/Particular'




function Header() {

    return (
        <div className='cont'>
            <header>
                <a href="http://facundoadarodev.netlify.app" target='__blank'>© 2023 Facundo Adaro Web Developer</a>
            </header>
            <div className="general">
                <div className="logoheader">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="navigation" id="headermov">
                    <Link to="/">Biografia</Link>
                    <Link to="/discos">Discos</Link>
                    <Link to="/fotos">Galeria</Link>
                    <Link to="/videos">Multimedia</Link>
                    <Link to="/prensa">Prensa</Link>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Biografia />}></Route>
                        <Route path="/discos" element={<Discos />}></Route>
                        <Route path='/discos/:id' element={<Particular />}/>
                        <Route path="/fotos" element={<Fotos />}></Route>
                        <Route path="/videos" element={<Videos />}></Route>
                        <Route path="/prensa" element={<Prensa />}></Route>
                        <Route path='/prensa/:id' element={<ContentPrensa />} />
                    </Routes>
                </div>
                <footer>
                    <a href="http://facundoadarodev.netlify.app" target='__blank'>© 2023 Facundo Adaro Web Developer</a>
                </footer>
            </div>
        </div>
    )
}

export default Header