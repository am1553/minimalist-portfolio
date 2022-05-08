import React, { useState } from 'react'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import CloseIcon from '@mui/icons-material/Close'
function Hamburger({ set_menu, menu }) {

    const style = {
        width: '30px',
        height: '30px',
        color: '#242424'
    }

  return (
    <button onClick={ () => {
      set_menu(!menu)
    } } className='header__hamburger'>

        {
            menu ? <CloseIcon style={ style }/> : <DragHandleIcon style={ style }/>
        }

    </button>
  )
}

export default Hamburger