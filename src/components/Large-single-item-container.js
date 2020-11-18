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

    const [showMultipleChoice, setShowMultipleChoice] = useState();
    let location = useLocation();
    let questionObject = location.state.questionObject;
    console.log("ques", location.state.question);
    console.log("ques", location.state.question.question);
    console.log("ques", location.state.question.answers);

    //Add correct answer to list of answer choices
    const answerChoices = [];
    
    //for (const item of questionList) {
    answerChoices = questionObject.incorrect_answers;
    answerChoices.push(questionObject.correct_answer);
    //console.log("item:", item);
    //console.log("ans pre shuf:", answerChoices);
    shuffle(answerChoices);
    //console.log("ans post shuf:", answerChoices);
    //}

    const showAnswerChoices = (answerChoices) => {
        console.log("howdy");

        setShowMultipleChoice(true);
    }
    // const {question} = useParams();
    return (
        <div>
            <p>Hi</p>
            <p>{location.state.question}</p>
            {showMultipleChoice? <AnswerChoicesPanel questionObject={questionObject} /> : <MainButton label="Answer" handleClick={showAnswerChoices} />}
        </div>
    );
}

export default LargeSingleItemContainer