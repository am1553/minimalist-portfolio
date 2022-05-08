import React, { useState } from 'react'
import Hamburger from './components/Hamburger'
import NavPanel from './components/NavPanel'
import CV from '../cv.docx'


function Header() {

  const [menu, setMenu] = useState(false)

  return (
    <div className='header'>
        <div className="header__mobile_nav">
            <Hamburger set_menu = {setMenu} menu = { menu } />
            <NavPanel set_menu = {setMenu} menu = { menu } />
        </div>
        {
          menu ? <div className="overlay" onClick={ () => setMenu(false) }></div> : null
        }

        <div className="header__desktop_nav">
          <nav>
            <a href="#home">Home</a>
            <a href="#about" >About</a>
            <a href="#projects" >Projects</a>
            <a href="#contact" >Contact</a>
          </nav>
          <a href={ CV } download><button>download cv</button></a>
        </div>
    </div>
  )
}

export default Header