import React from 'react'
import PhotoSnapImage from '../../../assets/photosnap.png'


function Card({ image, title, description, liveLink, codeLink }) {
  return (
    <div className='projects_container__card' data-aos='fade-in'>
      <div className="image_wrapper">
        <img src={ image } alt="" />
      </div>
      <div className="content_wrapper">
        <div className="text_wrapper">
            <h3>{ title }</h3>
            <p>{ description }</p>
        </div>
        <div className="button_wrapper">
            <a href={ liveLink } target = "_blank" ><button>Live</button></a>
            <a href={ codeLink } target = "_blank" ><button>Code</button></a>
        </div>
      </div>
    </div>
  )
}

export default Card