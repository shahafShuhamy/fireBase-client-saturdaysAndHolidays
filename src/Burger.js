import React from 'react'
import './Burger.css'

function Burger() {
    
    function myFunction() {
        const container = document.getElementsByClassName("container");
        console.log(container);
        container[0].classList.toggle("change");
        // container.classList.toggle("change");
    }

    return (
        <div className="container" onClick={myFunction}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default Burger
