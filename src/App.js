import React from 'react';
import Field from './components/Field/Field'
import cover from '../src/assets/cover.jpg'
import './App.css';

const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${cover})`, height: 760 }}>
            <div className="title">Tetris</div>
            <Field/>
        </div>
  );
}

export default App;