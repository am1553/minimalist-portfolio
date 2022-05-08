import React, { useEffect } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import AOS from 'aos'
import 'aos/dist/aos.css'


function Contact() {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    const style = {
        width: '50px',
        height: '50px',
        color: '#242424',
        cursor: 'pointer'
    }


    const Data = [
        {
            id: 1,
            image: <LinkedInIcon style={ style }/>,
            link: 'https://www.linkedin.com/in/am161/'
        },
        {
            id: 2,
            image: <MailIcon style={ style }/>,
            link: null
        },
        {
            id: 3,
            image: <GitHubIcon style={ style }/>,
            link: 'https://github.com/am1553'
        }
    ]
  return (


    <div className='contact' id='contact'>
        <h2 data-aos='fade-up'>Get in Touch</h2>

            <div className="icon_wrapper" data-aos='slide-right'>

                {
                    Data.map((data, key) => {

                        if(data.link !== null) {
                            return(
                                <a href={ data.link } target='_blank' key={data.id}>{ data.image }</a>
                            )
                        } else {
                            return(
                                <a href="mailto:am.career11@gmail.com" key={data.id}>{ data.image }</a>
                            )
                        }

                    } )
                }
            </div>
    </div>
  )
}

export default Contact