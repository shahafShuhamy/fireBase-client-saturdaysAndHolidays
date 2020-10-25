import React from 'react'

function Events(props) {
    const events = props.events;
    const listItems = events.map((event) => 
        <li>
            <div className="list-item">
                <span className="block">{event.location}</span>
                <span className="block">{event.name}</span>    
                <span className="block">{event.date}</span> 
            </div>
        </li>
    );
    const list = <ul className="events">{listItems}</ul>;

    return (
        <div>
            {list}
        </div>
    )
}

export default Events
