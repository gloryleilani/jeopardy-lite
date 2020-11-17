import React, { useEffect, useState } from 'react';
import SmallCategoryBox from './small-category-box';
import GameSmallSingleItem from './small-point-box';


const GameBoardColumn = props => {

    const [questionsInCategory, setQuestionsInCategory] = useState(null); 
    const categoryQuestionComponents= [];

    const category = "category name";
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
    }, []);

    return (
        <div>
            <SmallCategoryBox categoryName={category}/>
            {questionsInCategory}
        </div>
            
    );
}

export default GameBoardColumn