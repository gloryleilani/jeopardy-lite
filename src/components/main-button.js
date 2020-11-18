import React from 'react';


const MainButton = props => {

    return (
        <button 
            id={props.label}
            type="submit" 
            className="main-button"
            onClick={props.handleClick}
            value={props.value}>
            {props.label}
            
        </button>
    )
}

export default MainButton