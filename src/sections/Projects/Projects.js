import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

// react data
import PhotoSnapImage from '../../assets/photosnap.png'
import EntertainmentImage from '../../assets/entertainment.png'
import WorldImage from '../../assets/world.png'

// html css and js data
import ClockImage from '../../assets/clock.png'
import ArtGalleryImage from '../../assets/art-gallery.png'
import AccordionImage from '../../assets/accordion.png'

function Projects() {
    useEffect(()=> {
        AOS.init({duration: 1500})
      }, [])
    const [view, setView] = useState(true)
    // if true then view react projects and if falls then view normal

    const reactData = [
        {
            id: 1,
            image: PhotoSnapImage,
            title: "PhotoSnap",
            description: "This is a simple website that has multiple pages. Reusable components were used for this where data was passed as props from a local JSON file. This website is also responsive across all devices.",
            liveLink: "https://am1553.github.io/photosnap/",
            codeLink: "https://github.com/am1553/photosnap"
        },
        {
            id: 2,
            image: EntertainmentImage,
            title: "Entertainment Web App",
            description: "On this project data was stored in a local JSON file and passed as props thorugh reusable components and rendered using map function. There is filter functionality added to this, where shows can be rendered based on user search or category selected.",
            liveLink: "https://am1553.github.io/entertainment-web-app/",
            codeLink: "https://github.com/am1553/entertainment-web-app"
        },
        {
            id: 3,
            image: WorldImage,
            title: "World API",
            description: "On this project data was fetched from an API and rendered through reusable components. The user can search for a country as well as filter countries based on the region. The web app is also responsive across all devices.",
            liveLink: "https://am1553.github.io/world-api/",
            codeLink: "https://github.com/am1553/world-api"
        },
    ]


const customData = [
    {
        id: 1,
        image: ClockImage,
        title: "World Clock",
        description: "In this project, data is fetched based on the users location after receiving permission. A random quote is also generated on page refresh or by clicking the refresh button. This is also responsive across mobile to laptop using mediaqueries.",
        liveLink: "https://am1553.github.io/clock-app/",
        codeLink: "https://github.com/am1553/clock-app"
    },
    {
        id: 2,
        image: ArtGalleryImage,
        title: "Art Gallery",
        description: "On this project, animations from gsap library were used which was fun to learn and play around with. This is also responsive across mobile to laptop using mediaqueries. ",
        liveLink: "https://am1553.github.io/art-gallery/",
        codeLink: "https://github.com/am1553/art-gallery"
    },
    {
        id: 3,
        image: AccordionImage,
        title: "FAQ",
        description: "This was a fun small project where an faq accordion was built and there were a lot of challenges that I overcame. This was made completely responsive across all devices.",
        liveLink: "https://am1553.github.io/faq-accordian/",
        codeLink: "https://github.com/am1553/faq-accordian"
    },
]


  return (
    <div className='projects' id='projects'>

        <h2>Made using { view ? "React.js" : "HTML, CSS, and JavaScript" }</h2>
        <div className="switch">
            <button onClick={ () => setView(!view) }>{ view ? "View HTML, CSS and JavaScript" : "View React.js" }</button>
        </div>

        <div className="projects_container">
            <div className="card_container">
                {
                    view ? reactData.map((data, key) => {
                        return(
                            <Card 
                                key = { data.id }
                                image = { data.image }
                                title = { data.title }
                                description = { data.description }
                                liveLink = { data.liveLink }
                                codeLink = { data.codeLink }
                            />
                        )
                    }) : customData.map((data, key) => {
                        return(
                            <Card 
                                key = { data.id }
                                image = { data.image }
                                title = { data.title }
                                description = { data.description }
                                liveLink = { data.liveLink }
                                codeLink = { data.codeLink }
                            />
                        )
                    })
                }
            </div>
        </div>


    </div>
  )
}

export default Projects