import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialQuestions } from '../actions/shared';
import QuestionsList from './QuestionsList';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialQuestions());
  }
  
  render() {
    const questionTypes = ['Unanswered', 'Answered'];
    
    return (
      <div>
        {questionTypes.map((type, index) => 
          <QuestionsList key={index} type={type} questionIds={type === 'Unanswered' ? this.props.unansweredQuestionIds : this.props.answeredQuestionIds} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  const answeredQuestionIds = Object.keys(user.answers);
  const unansweredQuestionIds = Object.keys(questions).filter((questionId) => !(answeredQuestionIds.includes(questionId)));
  
  return {
    unansweredQuestionIds,
    answeredQuestionIds
  }
}

export default connect(mapStateToProps)(Dashboard);