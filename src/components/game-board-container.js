import React, { useEffect, useState } from 'react';
import GameBoardColumn from './game-board-column';


const GameBoardContainer = props => {
    
    
    let categories = new Set()
    //console.log("props.questions:", props.questions)
    for (let item in props.questions) {
        categories.add(props.questions[item].category)
        //console.log("item in questions:", props.questions[key].category)
        //console.log("categories:", categories)
        
    };
    let categoryArray = Array.from(categories)
    console.log("category array:", categoryArray)

    // for (let i=categoryArray.length; i=0; i--) {
    //     console.log("category array i", categoryArray[i])}


    //Set the categories for this game
    const round1Categories = categoryArray.slice(0,6);
    const round2Categories = categoryArray.slice(6,12);
    const round3Categories = categoryArray.slice(12,)
    console.log("round3 Qs", round3Categories)
    

    

    const [gameBoardColumns, setGameBoardColumns] = useState(null);
    const gameBoardColumnComponents = [] 
    
    // const categories = null; 
    // if (round===1) {
    //     categories = round1Categories;
    // }
    // if (round == 2) {
    //     categories = round2Categories;
    // }
    
    


    useEffect(() => {
        
        for (let i=0; i<6; i++) {
                    
            const gameBoardComponent = <GameBoardColumn 
                                        key = {i} 
                                        category={round1Categories[i]} 
                                        questions={props.questions} 
                                        />
            gameBoardColumnComponents.push(gameBoardComponent);                                    
        }

        setGameBoardColumns(gameBoardColumnComponents);
        console.log("column components state", gameBoardColumns)
    }, []);        

    return (
        <div>
            <h1> Jeopardy Lite </h1>
            <div>
                <table>
                    <tbody>
                        <tr>
                            {gameBoardColumns && gameBoardColumns.map((column) => (
                                <td>{column}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GameBoardContainer