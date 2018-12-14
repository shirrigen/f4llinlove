import React from 'react'
import './Cards.css'
import Zmage from 'react-zmage'

const Card = props => (
    <div className="Card">
        <Zmage src={props.image} alt={props.alt} radius={16} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)


export default Card