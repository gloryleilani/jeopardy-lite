import React, { useEffect, useState } from 'react';
import { useHistory, Route, BrowserRouter as Router } from 'react-router-dom';
//import LargeSingleItemContainer from './Large-single-item-container';
import SmallCategoryBox from './small-category-box';
import SmallPointBox from './small-point-box';

//Child of GameBoardContainer
const GameBoardColumn = props => {

    const [pointsInCategory, setPointsInCategory] = useState(null); 
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const categoryPointComponents= [];
    
    
    let seenQuestions = new Set()
    //console.log("props.questions", props.questions)
    
    useEffect(() => {
        for (let j in props.questions) {
            
            console.log("item in props.qs", props.questions[j]);
            console.log("category in round1Qs", props.questions[j].category);
            console.log("props.category", props.category);
            console.log("question in props.q", props.questions[j].question);
            console.log("seen doesn't have item", !seenQuestions.has(props.questions[j]));
            if (props.category === props.questions[j].category && !seenQuestions.has(props.questions[j])) {
                setSelectedQuestion(props.questions[j]);
                
                seenQuestions.add(props.questions[j]);
                console.log("seenQs", seenQuestions)
                console.log("seen doesn't have item", !seenQuestions.has(props.questions[j]));
                break;
            };
        };   
    },[]);
    console.log("question item", selectedQuestion); 
    const history = useHistory();

    const showQuestion = () => {
        
        history.push({
            pathname:`/question`,
            state: {questionObject: selectedQuestion}
        });
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