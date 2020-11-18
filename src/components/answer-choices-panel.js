import React, { useState } from 'react';
import MainButton from './main-button';
import { useHistory } from 'react-router-dom';


const AnswerChoicesPanel = props => {

    const answers = props.answers;
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const history = useHistory();

    const selectAnswer = (answ) => {
        setSelectedAnswer(answ.target.id);
        
        console.log("correct ans", props.correctAnswer);
        console.log("state:", selectedAnswer);

        if (selectedAnswer === props.correctAnswer) {
            console.log("Bingo");
            //Increment Player score
            //Go back to prior screen
            
            //Reset timer
        }
        
        else {
            console.log("Wrong answer");
            //Decrement Player score
        }
        // }
        history.push(`/game-board`);
    };
    

    const answerButtons = answers.map((answer) => (
        <MainButton label={answer} value={selectedAnswer} handleClick={selectAnswer}/>
    ));
        
    
    return (
        <div>
            <p>{answerButtons}</p>
        </div>
    );
}

export default AnswerChoicesPanel