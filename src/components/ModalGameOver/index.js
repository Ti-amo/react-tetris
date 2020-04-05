import React from 'react'
import './index.css'

const Modal = (props) => {
    const { handleCloseModal, showModal, score } = props

    return (
        <div className={` modal ${showModal ? "display-block" : "display-none"}`}>
            <section className="modal-main">
                <p className="text-over">Game Over</p>
                <p className="text-score">Your Score: {score}</p>
                <button className="btn-try" onClick={handleCloseModal}>Try Again</button>
            </section>
        </div>
    )
}

export default Modal;
