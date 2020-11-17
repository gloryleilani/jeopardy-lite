import React from 'react';

const SmallPointBox = props => {
    console.log(props.points);

    return (
        <div className="small-box">
            
            {props.points}
            
        </div>
    );
}

export default SmallPointBox