import React from 'react'
import './Cards.css'

const Card = props => (
    <div className="Card">
        <img src={props.image} alt={props.alt} radius={16} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)


export default Card