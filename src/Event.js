import React from 'react'
import './Event.css'

function Event(props) {
    let dataFormat = new Date(props.date._seconds * 1000);
    // when getting a date that was an input from the form and not inserted legendly into Data Base
    if (isNaN(dataFormat.getTime())) {
        dataFormat = new Date(props.date);
    }
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
