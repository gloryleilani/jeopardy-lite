import React, { useEffect, useState } from 'react';
import GameSmallSingleItem from './game-small-single-item';


const GameBoardColumn = props => {

    const [questionsInCategory, setQuestionsInCategory] = useState(null); 
    const categoryQuestionComponents= [];

    const showQuestion = () => {
        console.log("show question")
    };

    useEffect(() => {
        for (let i=1; i<6; i++) {
            
            console.log(i);
            const questionComponent = <GameSmallSingleItem
                                        key={i}
                                        points={i}
                                        handleClick={showQuestion} 
                                        />

            categoryQuestionComponents.push(questionComponent); 
        };
        setQuestionsInCategory(categoryQuestionComponents);
        console.log("state", questionsInCategory)
    }, [questionsInCategory]);

    return (
        <div>
            hi
            {questionsInCategory}
        </div>
            
    );
}

export default GameBoardColumn