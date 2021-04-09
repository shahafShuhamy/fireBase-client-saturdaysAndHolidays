import React from 'react'
import './AddEventModal.css'

function AddEventModal() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitted');
    }

    return (
        <div>
            <h4>Feel Event Details</h4>
            <form className="form" onSubmit={handleSubmit}>
                <label for="date">Date</label><br/>
                <input id="date" name="date" type="date"></input><br/>
                <label for="name">Name</label><br/>
                <input id="name" name="name" type="text"></input><br/>
                <label for="location">Where</label><br/>
                <input id="location" name="location" type="text"></input><br/>
                <br/>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default AddEventModal
