import React, { Component } from 'react'
import Question from './Question'

class QuestionsList extends Component {
  render() {
    console.log('Question IDs :', this.props.questionIds);
    return (
      <div>
        <h1>{`${this.props.type} Questions`}</h1>
        <ul>
          {this.props.questionIds.map(id =>
            <Question key={id} id={id} type={this.props.type} />
          )}
        </ul>
      </div>
    );
  }
}

export default QuestionsList;