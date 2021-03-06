import React from 'react';
import Event from './Event';
import { useEffect, useState } from 'react';
const axios = require('axios');

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type']= 'application/json';
axios.defaults.timeout = 5000;

function Events() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        axios.get("https://us-central1-saturadysholidays.cloudfunctions.net/events", {timeout: 7000})
        .then( (res) => {
            setIsLoaded(true);
            setItems([...res.data]);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
            setItems( 
        [
        {"name":"סוכות",  "date":"14/10/2020", "location": "שוחמיס"}, 
        {"name":"שבועות א", "date":"20/05/2020", "location": "משה"},
        {"name":"שבועות ב", "date":"14/11/2020", "location": "משה"},
        {"name":"ראש השנה", "date":"26/10/2020", "location": "שוחמיס"},
        {"name":"רמאדן א", "date":"15/01/2020", "location": "משה"},
        {"name":"סיגד", "date":"01/06/2020", "location": "שוחמיס"},
        {"name":"נובי גוד", "date":"21/09/2020", "location": "משה"},
        {"name":"איד אל פיטר", "date":"31/12/2020", "location": "שוחמיס"}
        ])
        })
    }, [])

    // const listItems = events.map((event) => 
    //     <li>
    //         <Event {...event}/>
    //     </li>
    //     );
    // const list = <ul className="events">{listItems}</ul>;
    // return (<div> {list} </div>)
    if (!isLoaded) {
      return <div class="loader">Loading...</div>;
      } else if (error){
        return <div>Error: {error.message}</div>;
      } else {
        return (
          <ul className="events">
            {items.map(item => (
                    <Event key={Math.random().toString(36).substring(7)} {...item}/>
            ))}
          </ul>
        );
      }
}

export default Events
