import React from 'react';
import '../componentCSS/Answer.css'

class Answer extends React.Component {
    render() {
        return <button className='btn reduce-padding btn-primary btn-lg btn-block'><h2 className="white-text">{this.props.answer}</h2></button>;
    }
}

export default Answer;