import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Question extends Component {

  render() {
    const { question, author } = this.props;
    
    if(question === null) {
      return <p>This Question doesn't exist</p>
    }
    
    return (
      <li>
        <div className='block'>
          <img 
            src={author.avatarURL}
            alt={`Avatar of ${author.name}`}
            className='avatar'
          />
          <div className='block-info'>
            <p>{`${author.name} asks:`}</p>
            <p>Would you rather</p>
            <p>{question.optionOne.text}</p>
            <Link to={`/questions/${question.id}`}>
              <button className='btn'>View Poll</button>
            </Link>
          </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;
  return {
    question: question ? question : null,
    author
  };
}

export default connect(mapStateToProps)(Question);
