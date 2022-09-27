import React, { useContext, useEffect, useState } from 'react'
import './tile.css'
import TurnContext from '../../TurnContext'


export default function Tile({index, row, col}) {
    let turn = useContext(TurnContext)
    let [myTurn, setMyTurn, grid, setGrid, checkWin] = turn;
    let [move, setMove]=useState(null);

    useEffect(()=>{
        // if(checkWin(grid)){
        //     alert (move + " WINNNNN")
        // };
    },[])

    function play(){
        if(!move && !checkWin(grid,move)){
            setMove(draw());
            setMyTurn(!myTurn);
            grid[row][col]=draw();
            setGrid(grid);
        }
        console.log(move);
        checkWin(grid,move);
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
