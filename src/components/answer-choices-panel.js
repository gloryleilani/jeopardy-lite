import React from 'react';
import MainButton from './main-button';


const AnswerChoicesPanel = props => {

    // const answers = props.questionObject.answerChoices;
    const answers = props.questionObject;
    console.log("answers:", answers)

    const answerButtons = answers.map((answer) => (
        <MainButton label={answer} />
    ));
        
    
    return (
        <div>
            <p>Answerchoices</p>
            <p>{answerButtons}</p>
        </div>
    );
}

export default AnswerChoicesPanel