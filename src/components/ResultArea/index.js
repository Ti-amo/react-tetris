import React from 'react'
import Next from '../Next/Next'
import './index.css'

const ResultArea = (props) => {
    const { gameOver, score} = props
    return (
        <div className="aside">
            <div className="status">{gameOver ? 'Game over' : ''}</div>
            <div className="score">{score}</div>
            <div className="figure">Figure</div>
        </div>
    )
}

export default ResultArea;