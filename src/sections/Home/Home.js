import React, { useEffect } from 'react'
import HeroImage from '../../assets/hero.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Home() {

  useEffect(()=> {
    AOS.init({duration: 1500})
  }, [])

  return (
    <div className='home' id='home' data-aos='fade-down'>
      <div className="hero_image">
        <img src={ HeroImage } alt="" />
      </div>
        <div className="text_wrapper">
            <h1>portfolio</h1>
            <span className='cursive'>frontend web developer</span>
        </div>
    </div>
  )
}

export default Home