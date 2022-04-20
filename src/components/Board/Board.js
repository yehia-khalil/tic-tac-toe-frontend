import React, { createContext, useRef, useState } from 'react'
import Tile from '../Tile/Tile';
import './board.css'
import TurnContext from '../../TurnContext'

export default function Board() {
    let [grid, setGrid]= useState(Array.from({length: 3},()=> Array.from({length: 3}, () => null)))
    const [myTurn, setMyTurn] = useState(true);
    
    function resetBoard(){

    }
    function checkWin(){
        if( checkRows()||
            checkColumns()||
            checkDiagonals()
            ){
            return true;
        }
        return false;
    }

    function checkRows(){
        for(let i = 0 ; i < 3 ; i ++){
            if(grid[i].every(elem=>elem=='X')){
                return true;
            }else if(grid[i].every(elem=>elem=='X')){
                return true;
            }
        }
        return false;
    }

    function checkColumns(){
        for(let col = 0 ; col < 3 ; col ++){
            if(grid[0][col] == grid[1][col] && grid[0][col] == grid[2][col] && grid[0][col] !=null){
                return true;
            }
        }
        return false;
    }

    function checkDiagonals(){
        if(((grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2] && grid[0][0] != null) || (grid[0][2] == grid[1][1] && grid[0][2] == grid[2][0] && grid[0][2] !=null ))){
            return true;
        }
        return false;
    }
    
    return ( 
        <TurnContext.Provider value={[myTurn, setMyTurn, grid, setGrid, checkWin]}>
            {grid.map((row,i)=>{
                return(
                    <div className='row' key={i}>
                        {row.map((item,j)=><Tile key={i*3+j} index={i*3+j+1} row={i} col={j} />)}
                    </div>
                )
            })}
            <button onClick={resetBoard}>reset board</button>
        </TurnContext.Provider>
    )
}