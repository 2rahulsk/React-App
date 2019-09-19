import React from 'react';
import './ValidationComp.css'
const Validation = (props) => {

    return(
        <div className ="val">
            <p>{props.text}</p>
        </div>
    );
}

export default Validation;