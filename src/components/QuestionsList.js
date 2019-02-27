import React, { Component } from 'react';
import Question from './Question';

class QuestionsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.questionIds.map(id =>
            <Question key={id} id={id} />
          )}
        </ul>
      </div>
    );
  }
}

export default QuestionsList;