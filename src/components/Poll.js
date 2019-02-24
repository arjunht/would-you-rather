import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/questions'

class Poll extends Component {
  state = {
    selectedOption: 'optionOne'
  }

  handleChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleSaveQuestionAnswer(this.props.question.id, this.state.selectedOption))
  }

  render() {
    
    if(this.props.question === null) {
      return <p>This question doesn't exist</p>
    }
    
    return (
      <div>
        {this.props.questionAnswered
          ? <div>{`Asked By ${this.props.author.name}`}</div>
          : <div>{`${this.props.author.name} asks:`}</div>
        }
        <img 
          src={this.props.author.avatarURL}
          alt={`Avatar of ${this.props.author.name}`}
        />
        <span>
          {this.props.questionAnswered
            ? (
              <div>
                <div>Results:</div>
                <div>Option One</div>
                <p>{`Would you rather ${this.props.question.optionOne.text}?`}</p>
                <p>{`Number of Votes: ${this.props.question.optionOne.votes.length} out of ${this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length}`}</p>
                <div>Option Two</div>
                <p>{`Would you rather ${this.props.question.optionTwo.text}?`}</p>
                <p>{`Number of Votes: ${this.props.question.optionTwo.votes.length} out of ${this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length}`}</p>
                <div>{`Your Vote: Option ${this.props.question.optionOne.votes.includes(this.props.authedUser)? '1' : '2'}`}</div>
              </div>
            ) : (
              <div>
                <p>Would You Rather ...</p>
                <form onSubmit={this.handleSubmit}>

                  <div>
                    <label>
                      <input
                        type='radio'
                        value='optionOne'
                        checked={this.state.selectedOption === 'optionOne'}
                        onChange={this.handleChange}
                      />
                      {this.props.question.optionOne.text}
                    </label>
                  </div>

                  <div>
                    <label>
                      <input
                        type='radio'
                        value='optionTwo'
                        checked={this.state.selectedOption === 'optionTwo'}
                        onChange={this.handleChange}
                      />
                      {this.props.question.optionTwo.text}
                    </label>
                  </div>

                  <div>
                    <button type='submit'>Submit</button>
                  </div>

                </form>
              </div>
            )
          }
        </span>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, {id}) {
  const question = questions[id];
  const author = question ? users[question.author] : null
  const questionAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);
  
  return {
    authedUser,
    question: question ? question : null,
    author,
    questionAnswered
  };
}

export default connect(mapStateToProps)(Poll);