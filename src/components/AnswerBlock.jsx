import React from 'react';
import Answer from './Answer';
import '../componentCSS/AnswerBlock.css'

class AnswerBlock extends React.Component {
    constructor () {
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        console.log('Success!')
    }
    render () {
        return (
            <div className="row">
                <div className="col-md-6 margin-bot" onClick={this.handleClick}>
                    <Answer answer={this.props.A1}/>
                </div>
                <div className="col-md-6 margin-bot" onClick={this.handleClick}>
                    <Answer answer={this.props.A2}/>
                </div>
                <div className="col-md-6 margin-bot" onClick={this.handleClick}>
                    <Answer answer={this.props.A3}/>
                </div>
                <div className="col-md-6 margin-bot" onClick={this.handleClick}>
                    <Answer answer={this.props.A4}/>
                </div>
            </div>
        )
    }
}

export default AnswerBlock;