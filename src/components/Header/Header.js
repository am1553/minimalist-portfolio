import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../Logo/Logo';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Header() {

    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
        if(menu === true) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }


  return (
    <div className='header'>

        <Logo />
        <div className="overlay" style={ menu ? null : {display: "none"} }></div>
        <div className="mobile">
            <button onClick={ handleClick }>
                {
                    menu ? <CloseIcon /> : <MenuIcon />
                }
            </button>
            <nav style={ menu ? { height: "20rem" } : {height: "0rem"} }>
                <li><a href="#home" onClick={ () => {
                    setMenu(!menu); 
                    if(menu === true) {
                        document.body.style.overflow = 'auto'
                    } else {
                        document.body.style.overflow = 'hidden'
                    }
                    } }>Home</a></li>
                <li><a href="#about" onClick={ () => {
                    setMenu(!menu); 
                    if(menu === true) {
                        document.body.style.overflow = 'auto'
                    } else {
                        document.body.style.overflow = 'hidden'
                    }
                    } }>About</a></li>
                <li><a href="#projects" onClick={ () => {
                    setMenu(!menu); 
                    if(menu === true) {
                        document.body.style.overflow = 'auto'
                    } else {
                        document.body.style.overflow = 'hidden'
                    }
                    } }>Projects</a></li>
                <div className="contact_wrapper">
                    <a href="https://www.linkedin.com/in/am161/" target="_blank"><LinkedInIcon style={{transform: "scale(1.3)", margin: "1rem 0"}} onClick={ () => {
                    setMenu(!menu); 
                    if(menu === true) {
                        document.body.style.overflow = 'auto'
                    } else {
                        document.body.style.overflow = 'hidden'
                    }
                    } }/></a>
                </div>
            </nav>
        </div>

        <div className="desktop">
            <div className="anchor_wrapper">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <div className="contact_wrapper">
                    <a href="https://www.linkedin.com/in/am161/" target="_blank"><LinkedInIcon style={{transform: "scale(1.5)"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header