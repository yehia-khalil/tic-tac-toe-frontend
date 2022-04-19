import React, { useContext, useState } from 'react'
import './tile.css'
import TurnContext from '../../TurnContext'


export default function Tile({index}) {

    let turn = useContext(TurnContext)
    let [myTurn, setMyTurn] = turn;
    let [move, setMove]=useState(null);

    function play(){
        if(!move){
            setMove(draw());
            setMyTurn(!myTurn);
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
