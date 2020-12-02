import React, { useEffect, useState } from 'react';
import MainButton from './main-button';
import { useHistory } from 'react-router-dom';


const AnswerChoicesPanel = props => {

    const answers = props.answers;
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [newScore, setNewScore] = useState(null);

    const history = useHistory();

    const selectAnswer = (answ) => {
        setSelectedAnswer(answ.target.id);
        
        console.log("correct ans", props.correctAnswer);
        console.log("seen in ans choice panel", props.seen);
        console.log("state:", selectedAnswer);
        console.log("new score increm right ans", newScore)
        console.log("props.worth:", props.worth)
        console.log("props.worth type:", typeof props.worth)
        console.log("props.score:", props.score)
        console.log("props.score type:", typeof props.score)
    };

    useEffect(()=> {
    
        if (selectedAnswer !== null) {
            if (selectedAnswer === props.correctAnswer) {
                console.log("Bingo");
                setNewScore(props.score + parseInt(props.worth)); //Increment Player score
            }
            else {
                console.log("Wrong answer");
                setNewScore(props.score - parseInt(props.worth)); //Decrement Player score   
            };
        };
    },[selectedAnswer]);


    const pushNextPg = () => {
        history.push({
            pathname: `/game-board`,
            score: newScore,
            seen: props.seen,
        }); 
    };
    
    if (newScore !== null) {
        console.log("new score if not null", newScore)
        pushNextPg();
    };
    
    const answerButtons = answers.map((answer, i) => (
        <MainButton key={i} label={answer} value={selectedAnswer} handleClick={selectAnswer}/>
    ));
    
    return (
        <div>
            <p>score: {props.score}</p>
            <p>Worth: {props.worth}</p>
            <p>{answerButtons}</p>
        </div>
    );
}

export default AnswerChoicesPanel