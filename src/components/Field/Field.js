import React, { Component } from 'react'
import Shapes from '../../shapes';
import './Field.css'

class Field extends Component {
    constructor(props) {
        super(props)
        this.state = {
            field: [],
            currentFigure: '',
            currentFigureId: 0,
            currentFigureType: '',
            nextFigure: '',
            nextFigureId: 0,
            nextFigureType: '',
            score: 0,
            fieldWidth: 15,
            fieldHeight: 20,
            figures: [],
            interval: null,
            speed: 150,
            defaultSpeed: 150,
            fastSpeed: 10,
            gameOver: false,
            rotate: false,
            stepCounter: 0
        }
    }
    flushField() {
        let newField = [];
        for (let i = 0; i < this.state.fieldHeight; i++) {
            newField[i] = [];
            for (let j = 0; j < this.state.fieldWidth; j++) {
                newField[i][j] = '';
            }
        }
        this.setState({ field: newField })
    }

    initFigures() {
        this.setState({ figures: Shapes })
    }
    rotateFigure() {
        let defaultPath = Shapes.find(figure => (figure.type === this.state.currentFigureType && figure.id === this.state.currentFigureId)).path
        let offsetLeft = this.state.currentFigure[0][0] - defaultPath[0][0]
        let offsetTop = this.state.currentFigure[0][1] - defaultPath[0][1]
        let next = Object.assign({}, Shapes.find(figure => (figure.type === this.state.currentFigureType && figure.id === this.state.currentFigureId + 1)))
        if (!next.hasOwnProperty('id')) {
            next = Object.assign({}, Shapes.find(figure => (figure.type === this.state.currentFigureType && figure.id === 1)))
        }
        let canBeShifted = true;
        next.path = next.path.map(item => [item[0] + offsetLeft, item[1] + offsetTop])
        next.path.map(item => {
            if (!(item[0] >= 0) || !(item[0] < this.state.fieldWidth) || this.state.field[item[1]][item[0]] === 'fill' || this.state.field[item[1]][item[0]] === 'fill') {
                canBeShifted = false;
            }
        })
        if (next && canBeShifted) {
            this.setState({
                currentFigure: next.path,
                currentFigureId: next.id,
                currentFigureType: next.type
            })
        }
    }
}