import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.css"

export default function Menu() {
  return (
    <div>
        Menu
        <nav>
                <Link to="/new">New Game</Link> | {" "}
                <Link to="/scores">Scores</Link>
        </nav>
    </div>
    
  )
}
