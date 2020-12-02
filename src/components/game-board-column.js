import React, { useEffect, useState } from 'react';
import { useHistory, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
//import LargeSingleItemContainer from './Large-single-item-container';
import SmallCategoryBox from './small-category-box';
import SmallPointBox from './small-point-box';

//Child of GameBoardContainer
const GameBoardColumn = props => {

    const [pointsInCategory, setPointsInCategory] = useState(null); 
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedPts, setSelectedPts] = useState(null);
    const [seenQs, setSeenQs] = useState(new Set());
    const [disablePointBox, setDisablePointBox] = useState(false);
    const categoryPointComponents= [];
    
    
    //let seenQuestions = new Set()
    //console.log("props.questions", props.questions)

    //console.log("question item", selectedQuestion); 
    const history = useHistory();
    const location = useLocation();
    let seen = location.seen;
    console.log("seen passed to column", seen);
    console.log("seen type", typeof seen);

    
    useEffect(() => {
        
            setSeenQs(seen);
        
    }, [seen]);
    console.log("seenQs after useeffect", seenQs);

    const showQuestion = (points, seenQs) => {
        points.preventDefault();
        console.log("seenQ in showQuestion why", seenQs);
        console.log("seen in showQuestion why", seen);
        //Push to LargeSingleItemContainer
        console.log("disable pre", disablePointBox);
        setSelectedPts(points.target.id);
        //setSelectedPts(points.target.points);
        setDisablePointBox(true);
        
        for (let j in props.questions) {
            console.log("j", j)
            console.log("item in props.qs", props.questions[j]);
            //console.log("not in seen before add", !seenQs.has(props.questions[j]));
            console.log("seenQs before add", seenQs)
            //console.log("category in round1Qs", props.questions[j].category);
            //console.log("props.category", props.category);
            //console.log("question in props.q", props.questions[j].question);
            //console.log("seen doesn't have item", !seenQuestions.has(props.questions[j]));
            if (seen === undefined) {
                
                if (props.category === props.questions[j].category) {
                    setSelectedQuestion(props.questions[j]);
                    setSeenQs(props.questions[j]);
                    console.log("seenQs after add if seen was undefined", seenQs)
                    //console.log("not in seen after add if seen was undefined", !seenQs.has(props.questions[j]));
                    break;
                };
            }
            else {
                if (!seenQs.has(props.questions[j])) {
                    if (props.category === props.questions[j].category) {
                        setSelectedQuestion(props.questions[j]);
                        const seenQuestions = seenQs;
                        seenQuestions.add(props.questions[j]);
                        setSeenQs(seenQuestions);
                        console.log("seenQs after add", seenQs)
                        console.log("not in seen after add", !seenQs.has(props.questions[j]));
                        break;
                    };
                };
            };
        };
    };
    
    const pushNextPg = () => {
        
        history.push({
            pathname:`/question`,
            questionObject: selectedQuestion,
            points: selectedPts,
            disabledBox: disablePointBox,
            seen: seenQs,
        }); 
    };

    if (selectedQuestion !== null) {
        console.log("disable post", disablePointBox);
        console.log("question pts post", selectedPts);
        pushNextPg();
    };

    useEffect(() => {
        //if round===1, factor=100, if round==2, factor == 200, if round==3, wager.
        for (let i=1; i<6; i++) {
            //console.log(i);
            const pointComponent = <SmallPointBox
                                        key={i}
                                        id={i}
                                        points={i*100}
                                        value={selectedPts}
                                        handleClick={showQuestion} 
                                        score={props.score}
                                        disabled={disablePointBox}
                                        />

            categoryPointComponents.push(pointComponent); 
        };
        setPointsInCategory(categoryPointComponents);
        
    }, []);
    //console.log("state", pointsInCategory)

    return (
        <div>
            <SmallCategoryBox categoryName={props.category} />
            {pointsInCategory}           
        </div>
    );
}

export default GameBoardColumn