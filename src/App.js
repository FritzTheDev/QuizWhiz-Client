import React, { Component } from 'react';
import './App.css';
import AnswerBlock from './components/AnswerBlock';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Ostrobogulous</h1>
        <Question q = 'Fritz?'/>
        <AnswerBlock A1='Yes' A2='Definitely' A3='Absolutely' A4='Well Duh!' />
      </div>
    );
  }
}

export default App;
