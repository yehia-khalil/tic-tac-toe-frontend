import React, { createContext, useRef, useState } from 'react'
import Tile from '../Tile/Tile';
import './board.css'
import TurnContext from '../../TurnContext'
import { checkColumns, checkDiagonals, checkRows } from './winConditions';

export default function Board() {
    let [grid, setGrid]= useState(Array.from({length: 3},()=> Array.from({length: 3}, () => null)))
    const [myTurn, setMyTurn] = useState(true);
    let [keys, setKeys] = useState([0,1,2,3,4,5,6,7,8]);

    function resetBoard(){
        setKeys(keys.map(elem=>elem+9));
        setMyTurn(true);
        setGrid(Array.from({length: 3},()=> Array.from({length: 3}, () => null)));
    }

    function checkWin(){
        if( checkRows(grid)||
            checkColumns(grid)||
            checkDiagonals(grid)
            ){
            return true;
        }
        return false;
    }

    return ( 
        <TurnContext.Provider value={[myTurn, setMyTurn, grid, setGrid, checkWin]}>
            {grid.map((row,i)=>{
                return(
                    <div className='row' key={i}>
                        {row.map((item,j)=><Tile key={keys[i*3+j]} index={i*3+j+1} row={i} col={j} />)}
                    </div>
                )
            })}
            <button onClick={resetBoard}>reset board</button>
        </TurnContext.Provider>
    )
}
