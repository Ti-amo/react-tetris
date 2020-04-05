import React from 'react'
import Next from '../Next/Next'
import './index.css'

const ResultArea = (props) => {
    const { gameOver, score, nextFigure, fieldWidth } = props
    return (
        <div className="aside">
            <div className="status">{gameOver ? 'Game over' : 'Your Score'}</div>
            <div className="score"><p>{score}</p></div>
            <Next figure={nextFigure} shift={fieldWidth / 3 + 1} />
        </div>
    )
}

export default ResultArea;