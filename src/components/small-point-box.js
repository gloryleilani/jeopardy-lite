import React from 'react';

//Child of GameBoardColumn
const SmallPointBox = props => {
    
    //console.log(props.points);

    return (
        <button 
            className="small-box"
            id={props.points}
            value={props.points}
            points={props.points}
            onClick={props.handleClick} 
            disabled={props.disabled}  
            >     
            {props.points}
            
        </button>
    );
}

export default SmallPointBox