import React from "react";

import './style.css'
import icon from './images.jpg';


const ErrorIndicator = () => {

    return(
        <div className="error-indicator d-flex">
            <div className="icon container">
                <img src={icon} alt="error icon"/>
            </div>
            <div className="container">
                <span className="boom"> Boom </span>
                <span>
                something has gone wrong
            </span>
                <span>
                But we already sent droidns to fix it
            </span>
            </div>

        </div>
    )
};

export default ErrorIndicator ;
