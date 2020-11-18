import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import AnswerChoicesPanel from './answer-choices-panel';
import MainButton from './main-button';


//Child of App (Router switch to /question)
const LargeSingleItemContainer = props => {

    //Function to shuffle questions in categories and also answer choices per question
    const shuffle = (lst) => {
        for (let i= lst.length - 1; i>0; i --) {
            const j = Math.floor(Math.random() * i);
            const temp = lst[i];
            lst[i] = lst[j];
            lst[j] = temp;
        };
    };

    const [showMultipleChoice, setShowMultipleChoice] = useState(false);
    
    //Pushed from GameBoardColumn
    let location = useLocation();
    console.log("quesOb", location.questionObject);

    //Add correct answer to list of answer choices
    const incorrectAnswerChoices = location.questionObject.incorrect_answers;
    const correctAnswerChoice = location.questionObject.correct_answer;
    const question = location.questionObject.question;
    let answerChoices = [];
    answerChoices = incorrectAnswerChoices;
    console.log("answer choices before push", answerChoices);
    answerChoices.push(correctAnswerChoice);
    console.log("answer choices after push", answerChoices);
    // console.log("ans pre shuf:", answerChoices);
    // shuffle(answerChoices);
    //console.log("ans post shuf:", answerChoices);
    //}

    const showAnswerChoices = (answerChoices) => {
        console.log("howdy");

        setShowMultipleChoice(true);
    }
    // const {question} = useParams();
    return (
        <div>
            <p>{question}</p>
            {showMultipleChoice? <AnswerChoicesPanel answers={answerChoices} correctAnswer={correctAnswerChoice} /> : <MainButton label="Answer" handleClick={showAnswerChoices} />}
        </div>
    );
}

export default LargeSingleItemContainer