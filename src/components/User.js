import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    const { avatarURL, name, answers, questions } = this.props.user;
    const answeredQuestions = Object.keys(answers).length;
    const createdQuestions = questions.length;
    const score = answeredQuestions + createdQuestions;
    
    return (
      <li>
        <img 
          src={avatarURL}
          alt={`Avatar of ${name}`}
        />
        <span>
          <div>{name}</div>
          <p>{`Answered Questions: ${answeredQuestions}`}</p>
          <p>{`Created Questions: ${createdQuestions}`}</p>
        </span>
        <span>
          <p>{`Score: ${score}`}</p>
        </span>
      </li>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user
  }
}

export default connect(mapStateToProps)(User)