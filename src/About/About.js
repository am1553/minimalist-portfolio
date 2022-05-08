import React, { useEffect } from 'react'
import Card from './components/Card'
import DevTechIcon from '../assets/coding.png'
import DesignIcon from '../assets/web-design.png'
import ReactIcon from '../assets/atom-symbol.png'
import PreviousIcon from '../assets/back-arrow.png'
import NowIcon from '../assets/now.png'
import FutureIcon from '../assets/future.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


function About() {

    useEffect(() => {
        AOS.init({duration: 1500})
    }, [])

    const skillsData = [
        {   
            id: 1,
            image: DevTechIcon,
            title: 'Development Technology',
            description: 'HTML, CSS and JavaScript is the core fundamental of what I am able to do. Ideally I use React.js to build a website, where I integreate SCSS with BEM methodology and inline conditional styling.'
        },
        {
            id: 2,
            image: DesignIcon,
            title: 'Design to Code & Data',
            description: 'I can take a design and code it pixel perfectly to work across all devices as well as make it interactive.I can fetch data from an API and use it for rendering components.'
        },
        {
            id: 3,
            image: ReactIcon,
            title: 'More on React.js',
            description: 'I have been using React.js and have built multiple projects using it. I am familiar with reusable components, components state management, hooks and props, conditional rendering, and more.',
        }
    ]

    const journeyData = [
        {   
            id: 1,
            image: PreviousIcon,
            title: 'Previously',
            description: 'I come from an Engineering background, and was pursuing it before I started to code and decided to change my career. I ended up completing courses on freeCodeCamp and started completing challenges from frontendmentor.io there onwards.'
        },
        {
            id: 2,
            image: NowIcon,
            title: 'Now',
            description: 'Currently, I am gaining industry skills and the experience of working in a team following agile workflow. I have been tasked with various pages which integrates updating API and fetching data.'
        },
        {
            id: 3,
            image: FutureIcon,
            title: 'Future Plans',
            description: 'In 5 years time, I see myself becoming a full stack web developer and learning new languages.',
        }
    ]

  return (
    <div className='about' id='about' >

        <div className="skills">
            <h2 data-aos='fade-in'>Skills</h2>
            <div className="card_container">
                {
                    skillsData.map((data, key) => {
                        return(
                            <Card 
                                key = { data.id }
                                image = { data.image }
                                title = { data.title }
                                description = { data.description }

                            />
                        )
                    })
                }
            </div>
        </div>
        <div className="journey">
            <h2 data-aos='fade-in'>Journey</h2>

            <div className="card_container">
                {
                    journeyData.map((data, key) => {
                        return(
                            <Card 
                                key = { data.id }
                                image = { data.image }
                                title = { data.title }
                                description = { data.description }
                            />
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default About