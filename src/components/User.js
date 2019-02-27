import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { avatarURL, name, answers, questions } = this.props.user;
    const answeredQuestions = Object.keys(answers).length;
    const createdQuestions = questions.length;
    const score = answeredQuestions + createdQuestions;
    
    return (
      <li>
        <div className='block'>
          <img 
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
          <div className='block-info'>
            <p>{name}</p>
            <p>{`Answered Questions: ${answeredQuestions}`}</p>
            <p>{`Created Questions: ${createdQuestions}`}</p>
            <p>{`Score: ${score}`}</p>
          </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user
  };
}

export default connect(mapStateToProps)(User);