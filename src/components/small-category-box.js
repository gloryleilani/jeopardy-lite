import React from 'react';

const SmallCategoryBox = props => {
    console.log(props.categoryName);

    return (
        <div className="small-box">
            {props.categoryName} 
            
            
        </div>
    );
}

export default SmallCategoryBox