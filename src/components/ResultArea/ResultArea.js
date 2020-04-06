import React from 'react'
import Next from '../Next/Next'
import './ResultArea.css'


class ResultArea extends React.Component{
    render(){
        const { gameOver, score, nextFigure, fieldWidth } = this.props
        return (
            <div className="aside">
                <div className="status">{gameOver ? 'Game over' : 'Your Score'}</div>
                <div className="score"><p>{score}</p></div>
                <Next figure={nextFigure} shift={fieldWidth / 3 + 1} />
            </div>
        )
    }
}

export default ResultArea;