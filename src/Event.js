import React from 'react'
import './Event.css'

function Event(props) {
    const dataFormat = new Date(props.date._seconds * 1000);
    const dateFormatted = dataFormat.toLocaleDateString();
    return (
        <li>
        <div className="list-item">
                <span className="block">{props.location}</span>
                <span className="block">{props.name}</span>    
                <span className="block">{dateFormatted}</span> 
        </div>
        </li>
    )
}

export default Event
