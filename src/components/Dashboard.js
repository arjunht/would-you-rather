import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsList from './QuestionsList';

class Dashboard extends Component {
  
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
    unansweredQuestionIds: unansweredQuestionIds.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionIds: answeredQuestionIds.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);