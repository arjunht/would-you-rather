import React, { Component } from 'react';
import { connect } from 'react-redux'

class Question extends Component {
  viewPoll = (e) => {
    e.preventDefault();
    
  }

  render() {
    if(this.props.question === null) {
      return <p>This Question doesn't exist</p>
    }
    
    return (
      <li>
        <div>{`${this.props.author.name} asks:`}</div>
        <img 
          src={this.props.author.avatarURL}
          alt={`Avatar of ${this.props.author.name}`}
        />
        <span>
          <p>Would you rather</p>
          <p>{this.props.question.optionOne.text}</p>
          <button onClick={this.viewPoll}>View Poll</button>
        </span>
      </li>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id, type }) {
  const question = questions[id];
  const author = question ? users[question.author] : null
  return {
    question: question ? question : null,
    author
  };
}

export default connect(mapStateToProps)(Question);
