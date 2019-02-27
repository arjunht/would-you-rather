import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/shared';

class Poll extends Component {
  state = {
    selectedOption: 'optionOne'
  }

  handleChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleSaveQuestionAnswer(this.props.question.id, this.state.selectedOption));
  };

  render() {
    
    const { question, author, questionAnswered, authedUser } = this.props;
    const { selectedOption } = this.state;

    if(question === null) {
      return <p>This question doesn't exist</p>
    }

    const { optionOne, optionTwo } = question;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    
    return (
      <div className='block'>
        <img 
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
          className='avatar'
        />
        <div className='block-info'>
          {questionAnswered
            ? (
              <Fragment>
                <h2>{`Asked By ${author.name}`}</h2>
                <h3>Results:</h3>
                <h4>Option One</h4>
                <p>{`Would you rather ${optionOne.text}?`}</p>
                <p>{`Number of Votes: ${optionOne.votes.length} out of ${totalVotes}`}</p>
                <p>{`Pecentage of Votes: ${Math.floor(optionOne.votes.length / (totalVotes) * 100)}%`}</p>
                <h4>Option Two</h4>
                <p>{`Would you rather ${optionTwo.text}?`}</p>
                <p>{`Number of Votes: ${optionTwo.votes.length} out of ${totalVotes}`}</p>
                <p>{`Pecentage of Votes: ${Math.floor(optionTwo.votes.length / (totalVotes) * 100)}%`}</p>
                <b>{`Your Vote: Option ${optionOne.votes.includes(authedUser)? 'One' : 'Two'}`}</b>
              </Fragment>
            ) : (
              <Fragment>
                <h2>{`${author.name} asks:`}</h2>
                <div>
                  <h3>Would You Rather ...</h3>
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <label>
                        <input
                          type='radio'
                          value='optionOne'
                          checked={selectedOption === 'optionOne'}
                          onChange={this.handleChange}
                        />
                        {optionOne.text}
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type='radio'
                          value='optionTwo'
                          checked={selectedOption === 'optionTwo'}
                          onChange={this.handleChange}
                        />
                        {optionTwo.text}
                      </label>
                    </div>
                    <div>
                      <button className='btn' type='submit'>Submit</button>
                    </div>
                  </form>
                </div>
              </Fragment>
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const questionAnswered = question ? question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser) : null;
  
  return {
    authedUser,
    question: question ? question : null,
    author,
    questionAnswered
  };
}

export default connect(mapStateToProps)(Poll);