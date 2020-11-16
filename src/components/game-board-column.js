import React from 'react';
import GameSmallSingleItem from './game-small-single-item';


const GameBoardColumn = props => {

    return (
        <React.Fragment>
            <tr>
                <GameSmallSingleItem points={points} handleClick={showQuestion}/>
            </tr>
            <tr>
                <GameSmallSingleItem />
            </tr>
            <tr>
                <GameSmallSingleItem />
            </tr>
            <tr>
                <GameSmallSingleItem />
            </tr>
            <tr>
                <GameSmallSingleItem />
            </tr>
            <tr>
                <GameSmallSingleItem />
            </tr>
        </React.Fragment>
            
    );
}

export default GameBoardColumn