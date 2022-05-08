import React, { useEffect } from 'react'
import ProjectCard from './components/ProjectCard'
import PhotoSnapImage from '../assets/photosnap.png'
import EntertainmentImage from '../assets/entertainment.png'
import WorldImage from '../assets/world.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {

  useEffect(() => {
    AOS.init({duration: 1500})
  }, [])

  const projectsData = [
    {
      id: 1, 
      image: PhotoSnapImage,
      title: 'PhotoSnap', 
      description: 'This project was made using React.js, it is a simple website that has multiple pages. Reusable components were used for this where data was passed as props from a local JSON file. This website is also responsive across all devices.',
      liveLink: 'https://am1553.github.io/photosnap/',
      codeLink: 'https://github.com/am1553/photosnap'
    },
    {
      id: 2, 
      image: EntertainmentImage,
      title: 'Entertainment Web App', 
      description: 'This project was made using React.js, where data was stored in a local JSON file and passed as props thorugh reusable components. There is filter functionality added to this, where shows can be rendered based on user search or category selected.',
      liveLink: 'https://am1553.github.io/entertainment-web-app/',
      codeLink: 'https://github.com/am1553/entertainment-web-app'
    },
    {
      id: 3, 
      image: WorldImage,
      title: 'World API', 
      description: 'This project was made using React.js where data was fetched from an API and rendered through reusable components. The user can search for a country as well as filter countries based on the region. The web app is also responsive across all devices.',
      liveLink: 'https://am1553.github.io/world-api/',
      codeLink: 'https://github.com/am1553/world-api'
    }
    
  ]

  return (
    <div className='projects' id='projects'>
      <h2 data-aos='fade-in'>Projects</h2>

      <div className="projects__card_container">
        {
          projectsData.map((data, key) => {
            return(
              <ProjectCard 
                key={ data.id }
                image = { data.image }
                title = { data.title }
                description = { data.description }
                live_link = { data.liveLink }
                code_link = { data.codeLink }
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects