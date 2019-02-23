import React, { Component } from 'react'

class QuestionsList extends Component {
  render() {
    console.log('Question IDs :', this.props.questionIds);
    return (
      <div>
        <h1>{`${this.props.type} Questions`}</h1>
      </div>
    );
  }
}

export default QuestionsList;