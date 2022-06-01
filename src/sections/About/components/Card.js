import React from 'react'


function Card({ image, title, description, background }) {
  return (
    <div className='about__card' style={ {backgroundColor: background} } data-aos='slide-right' >
        <div className="about_logo">
            <img src={ image } alt="" />
        </div>
        <div className="card_wrapper">
            <h3>{ title }</h3>
            <p>{ description }</p>
        </div>
    </div>
  )
}

export default Card