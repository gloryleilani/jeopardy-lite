import React, { useEffect, useState } from 'react';
import SmallCategoryBox from './small-category-box';
import GameSmallSingleItem from './small-point-box';


const GameBoardColumn = props => {

    const [questionsInCategory, setQuestionsInCategory] = useState(null); 
    const categoryQuestionComponents= [];

    
    const showQuestion = () => {
        console.log("show question")
    };

    useEffect(() => {
        
        //if round===1, factor=100, if round==2, factor == 200, if round==3, wager.
        for (let i=1; i<6; i++) {
            
            //console.log(i);
            const questionComponent = <GameSmallSingleItem
                                        key={i}
                                        points={i*100}
                                        handleClick={showQuestion} 
                                        />

            categoryQuestionComponents.push(questionComponent); 
        };
        setQuestionsInCategory(categoryQuestionComponents);
        console.log("state", questionsInCategory)
    }, []);

    return (
        <div>
            <SmallCategoryBox categoryName={props.category}/>
            {questionsInCategory}
        </div>
            
    );
}

export default GameBoardColumn