import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import './Cards.css'

const Card = props => (
    <div className="Card">
        <ImageZoom
        image={{
          src: props.image,
          alt: props.alt,
          className: 'aaaa',
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