import React, { useContext, useState } from 'react'
import './tile.css'
import TurnContext from '../../TurnContext'


export default function Tile({index, row, col}) {
    let turn = useContext(TurnContext)
    let [myTurn, setMyTurn, grid, setGrid, checkWin] = turn;
    let [move, setMove]=useState(null);

    function play(){
        if(!move && !checkWin()){
            setMove(draw());
            setMyTurn(!myTurn);
            grid[row][col]=draw();
            setGrid(grid);
            if(checkWin()){
                alert (draw() + " WINNNNN")
            };
        }
    }
    
    function draw(){
        if(myTurn){
            return 'X'
        }
        return 'O';
    }

    return (
        <div className='tile' onClick={play}>{move}</div>
    )
}
