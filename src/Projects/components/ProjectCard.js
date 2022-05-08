import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ProjectCard( {image, title, description, live_link, code_link} ) {

  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])

  return (
    <div className='projects__project_card'>
        <img src={ image } alt="" data-aos='fade-right'/>
        <div className="text_wrapper" data-aos='fade-in'>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <div className="anchor_wrapper">
                <a href={ live_link } target='_blank'>Live</a>
                <a href={ code_link } target='_blank'>Code</a>
            </div>
        </div>
        
    </div>
  )
}

export default ProjectCard 