import React from 'react'
import CV from '../../cv.docx'
function NavPanel({set_menu, menu}) {
  return (
    <nav className={ menu ? 'header__nav_panel header__nav_panel-active' : 'header__nav_panel' }>
        <a href="#home" onClick={() => set_menu(false)}>Home</a>
        <a href="#about" onClick={() => set_menu(false)}>About</a>
        <a href="#projects" onClick={() => set_menu(false)}>Projects</a>
        <a href="#contact" onClick={() => set_menu(false)}>Contact</a>
        <a href={ CV } download><button>download cv</button></a>
    </nav>
  )
}

export default NavPanel