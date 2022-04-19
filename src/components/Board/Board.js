import React, { createContext, useRef, useState } from 'react'
import Tile from '../Tile/Tile';
import './board.css'
import TurnContext from '../../TurnContext'

export default function Board() {

    let grid = [
        [ 1 , 1 , 1 ],
        [ 1 , 1 , 1 ],
        [ 1 , 1 , 1 ]
    ];
    let tilesRef = useRef([]);
    const [myTurn, setMyTurn] = useState(true);
    
    function checkWin(){

    }

    return ( 
        <TurnContext.Provider value={[myTurn, setMyTurn]}>
            {grid.map((row,i)=>{
                return(
                    <div className='row' key={i}>
                        {row.map((item,j)=><Tile ref={el=>tilesRef.current[i*3+j] = el} key={i*3+j} index={i*3+j+1} />)}
                    </div>
                )
            })}
        </TurnContext.Provider>
    )
}