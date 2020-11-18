import React from 'react';

//Child of GameBoardColumn
const SmallPointBox = props => {
    
    //console.log(props.points);

    return (
        <button 
            className="small-box"
            id={props.id}
            onClick={props.handleClick}>        
            {props.points}
        </button>
    );
}

export default SmallPointBox