import React, { useState } from 'react'
import Tile from '../Tile/Tile';
import './board.css'
import TurnContext from '../../TurnContext'
import { checkWin } from './winConditions';
import { Link } from 'react-router-dom';

export default function Board() {
    let [grid, setGrid]= useState(Array.from({length: 3},()=> Array.from({length: 3}, () => null)))
    const [myTurn, setMyTurn] = useState(true);
    let [keys, setKeys] = useState([0,1,2,3,4,5,6,7,8]);

    function resetBoard(){
        setKeys(keys.map(elem=>elem+9));
        setMyTurn(true);
        setGrid(Array.from({length: 3},()=> Array.from({length: 3}, () => null)));
    }


    return ( 
        <TurnContext.Provider value={[myTurn, setMyTurn, grid, setGrid, checkWin]}>
            
            <Link to="/">Home</Link> 

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
