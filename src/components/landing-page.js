import React from 'react';
import MainButton from './main-button';


const LandingPage = props => {

    return (
        <div> 
            <h1> Jeopardy Lite</h1>
            <p> Welcome! Would you like to play?</p> 
            <MainButton label="Play" play={props.play}/>
        </div>
    )
}; 

export default LandingPage