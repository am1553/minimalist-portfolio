import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Card({ image, title, description }) {

  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])


  return (
    <div className='about__card' data-aos='fade-up' >
        <div className="image_container">
            <img src={ image } alt="" />
        </div>
        <div className="text_wrapper">
            <h3>{ title }</h3>
            <p>{ description }</p>
        </div>
    </div>
  )
}

export default Card