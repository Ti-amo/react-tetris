import React from 'react'
import './index.css'

const ResultArea = (props) => {
    const { gameOver, score, nextFigure} = props
    return (
        <div className="aside">
            <div className="status">{gameOver ? 'Game over' : ''}</div>
            <div className="score">{score}</div>
            <div className="nextFigure">Next Figure</div>
        </div>
    )
}

export default ResultArea;