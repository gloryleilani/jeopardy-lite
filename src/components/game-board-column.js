import React, { useEffect, useState } from 'react';
import LargeSingleItemContainer from './Large-single-item-container';
import SmallCategoryBox from './small-category-box';
import SmallPointBox from './small-point-box';


const GameBoardColumn = props => {

    const [pointsInCategory, setPointsInCategory] = useState(null); 
    const [question, setQuestion] = useState(null);
    const categoryPointComponents= [];
    
    
    let seenQuestions = new Set()
    //console.log("props.questions", props.questions)
    for (let j in props.questions) {
        
        //console.log("item in props.qs", props.questions[j]);
        //console.log("category in round1Qs", props.questions[j].category);
        //console.log("props.category", props.category);
        if (props.category === props.questions[j].category && !seenQuestions.has(props.questions[j])) {
            const question = props.questions[j].question;
            console.log("question", question); 
            seenQuestions.add(props.questions[j]);
            console.log("seenQs", seenQuestions)
            break;
        };
    };   

    const showQuestion = () => {
        console.log("console show question:")
        return (
        <div>
            <p> beeeep</p>
        <LargeSingleItemContainer question={question}/>
        </div>
        )
        
    };

    useEffect(() => {
        
        //if round===1, factor=100, if round==2, factor == 200, if round==3, wager.
        for (let i=1; i<6; i++) {
            //console.log(i);
            const pointComponent = <SmallPointBox
                                        key={i}
                                        points={i*100}
                                        handleClick={showQuestion} 
                                        
                                        />

            categoryPointComponents.push(pointComponent); 
        };
        setPointsInCategory(categoryPointComponents);
        
    }, []);
    console.log("state", pointsInCategory)

    return (
        <div>
            <SmallCategoryBox categoryName={props.category}/>
            {pointsInCategory}           
        </div>
    );
}

export default GameBoardColumn