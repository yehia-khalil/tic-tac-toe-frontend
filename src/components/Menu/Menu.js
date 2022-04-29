import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        Menu
        <nav    
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}>
                <Link to="/new">New Game</Link> | {" "}
                <Link to="/scores">Scores</Link>
        </nav>
    </div>
    
  )
}
