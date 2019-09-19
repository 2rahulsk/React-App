import React from 'react';

const CharComponent = (props) => {

    return(
        <div>
            <p onClick={props.delete}>{props.text}</p>
        </div>
    );
}

export default CharComponent;