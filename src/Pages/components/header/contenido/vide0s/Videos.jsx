import React, { useState } from 'react'
import './Videos.css'
import ReactPlayer from 'react-player'
import LogoYoutube from './Redes/Youtube.png'
import LogoSpotify from './Redes/Spotify.png'

function Videos() {


  return (
        <div className='videos'>
          <div className='principal'>

            <ReactPlayer
              url='http://www.youtube.com/watch?v=20f29YJx8uY'
              controls
              // loop
              playing
              width='100%'
            />
          </div>
          <div className='redes'>            
            <a href="https://www.youtube.com/@DanielAdaroOficial" target="_blank"><img src={LogoYoutube} alt="" /></a>
            <a href="https://www.spotify.com/ar" target="_blank"><img src={LogoSpotify} alt="" /></a>
          </div>
        </div>

  )
}

export default Videos