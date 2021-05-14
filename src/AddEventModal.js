import React from 'react'
import './AddEventModal.css'
const axios = require('axios');

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type']= 'application/json';
axios.defaults.timeout = 5000;

function AddEventModal() {

    function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target);
        const name = data.get('name');
        const date = data.get('date');
        const location = data.get('location');
        if (name && date && location) {
            data.set('holidayName', name);
            data.set('location', location);
            data.set('Date', date);
            axios.post('https://us-central1-saturadysholidays.cloudfunctions.net/events/withDate', 
            {
            holidayName: name,
            location: location,
            Date: date
        })
            .then((response) => {
                console.log(response);
            },(error) => {
                console.log(error);
            });
        }
    }

    return (
        <div>
            <h4>Feel Event Details</h4>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label><br/>
                <input id="date" name="date" type="date"></input><br/>
                <label htmlFor="name">Name</label><br/>
                <input id="name" name="name" type="text"></input><br/>
                <label htmlFor="location">Where</label><br/>
                <input id="location" name="location" type="text"></input><br/>
                <br/>
                <div className="form-actions">
                    <button type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddEventModal
