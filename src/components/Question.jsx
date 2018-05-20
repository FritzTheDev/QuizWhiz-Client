import React from 'react';

class Question extends React.Component {
    render() {
        return(
            <h1>{this.props.q}</h1>
        )
    }
}

export default Question;