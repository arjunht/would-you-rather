import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {

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
          <Link to={`/questions/${this.props.question.id}`}>
            <button>View Poll</button>
          </Link>
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
