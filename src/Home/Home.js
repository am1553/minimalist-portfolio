import React , { useEffect } from 'react'
import PatternRight from '../assets/pattern-right.svg'
import PatternLeft from '../assets/pattern-left.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'





function Home() {

  useEffect(()=> {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className='home' id='home'>
        <img src={ PatternRight } alt="" className='pattern right' />
        <div className="home__text_wrapper" data-aos='fade-right'>
            <h1>Hi, my name is Aryan Mehta.</h1>
            <span className='intro_text'>I am a Frontend Developer skilled in React.js</span>
            <button onClick={ () => {
              document.getElementById('projects').scrollIntoView()
            } }>view projects</button>
        </div>
        <img src={ PatternLeft } alt="" className='pattern left' />
    </div>
  )
}

export default Home