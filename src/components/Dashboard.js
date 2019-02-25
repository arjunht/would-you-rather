import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsList from './QuestionsList';

class Dashboard extends Component {
  state = {
    unansweredQuestionsTab: true
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      unansweredQuestionsTab : !this.state.unansweredQuestionsTab
    })
  }
  
  render() {
    const { unansweredQuestionsTab } = this.state;
    const questionType = unansweredQuestionsTab
      ? 'Unanswered'
      : 'Answered'
    
    return (
      <div>
        <h1>{`${questionType} Questions`}</h1>
        <button onClick={this.toggle}>{`Display ${unansweredQuestionsTab ? 'Answered' : 'Unanswered'} Questions`}</button>
        <QuestionsList questionIds={questionType === 'Unanswered' ? this.props.unansweredQuestionIds : this.props.answeredQuestionIds} />
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