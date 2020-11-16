import React from 'react';
import GameBoardColumn from './game-board-column';


const GameBoardContainer = props => {

    return (
        <div>
            <h1> Jeopardy Lite </h1>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <GameBoardColumn />
                            </td>
                            <td>
                                <GameBoardColumn />
                            </td>
                            <td>
                                <GameBoardColumn />
                            </td>
                            <td>
                                <GameBoardColumn />
                            </td>
                            <td>
                                <GameBoardColumn />
                            </td>
                            <td>
                                <GameBoardColumn />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GameBoardContainer