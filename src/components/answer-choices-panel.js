import React from 'react';
import MainButton from './main-button';


const AnswerChoicesPanel = props => {

    const answers = props.questionObject.answerChoices;

    const answerButtons = answers.map((answer) => (
        <MainButton label={answer} />
    ));
        
    
    return (
        <div>
            <p>Answerchoices</p>
            <p>{answers}</p>
        </div>
    );
}

export default AnswerChoicesPanel