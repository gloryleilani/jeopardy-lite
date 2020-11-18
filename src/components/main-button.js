import React from 'react';


const MainButton = props => {

    return (
        <button 
            type="submit" 
            className="main-button"
            onClick={props.handleClick}>
            {props.label}
            
        </button>
    )
}

export default MainButton