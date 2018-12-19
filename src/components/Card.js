import React from 'react'
import './Cards.css'
import ImageZoom from 'react-medium-image-zoom'

const Card = props => (
  <div className="Card">
    <ImageZoom
      image={{
        src: props.image,
        alt: props.alt,
        className: 'zoom',
      }}
      zoomImage={{
        src: props.image,
        alt: props.alt,
        className: 'zoomed',
      }}
    />
    <h3>{props.title}</h3>
    <p>{props.text}</p>

  </div>
)

export default Card