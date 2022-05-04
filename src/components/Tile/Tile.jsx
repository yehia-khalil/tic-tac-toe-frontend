import React, { useContext, useEffect, useState } from 'react'
import './tile.css'
import TurnContext from '../../TurnContext'


export default function Tile({ index, row, col }) {
    let turnContext = useContext(TurnContext)
    let [myTurn, setMyTurn, grid, setGrid, checkWin] = turnContext;
    let [move, setMove] = useState(null);

    useEffect(() => {
        if (checkWin()) {
            alert(move + " WINNNNN")
        };
    }, [move])

    function play() {
        if (!move && !checkWin()) {
            setMove(draw());
            setMyTurn(!myTurn);
            grid[row][col] = draw();
            setGrid(grid);
        }
    }

    function draw() {
        return myTurn ? "X" : "O";
    }

    return (
        <div className='tile' onClick={play}>{move}</div>
    )
}
