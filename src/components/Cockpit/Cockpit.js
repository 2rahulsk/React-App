import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        border: '1px solid blue',
        padding: '8px',
        margin: '50px',
        cursor: 'pointer',
        fonr:'inherit'
      };

    return(
        <div>
            <h1>{props.appTitle}</h1>
            <button style={style} onClick = {props.toggle}>switch Name</button>
        </div>
        
    );
}

export default cockpit;