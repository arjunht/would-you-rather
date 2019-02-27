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
    });
  };
  
  render() {
    const { unansweredQuestionsTab } = this.state;
    const { unansweredQuestionIds, answeredQuestionIds } = this.props;

    const questionType = unansweredQuestionsTab
      ? 'Unanswered'
      : 'Answered'
    
    return (
      <div>
        <h3 className='center'>{`${questionType} Questions`}</h3>
        <button className='btn' onClick={this.toggle}>{`Display ${unansweredQuestionsTab ? 'Answered' : 'Unanswered'} Questions`}</button>
        <QuestionsList questionIds={questionType === 'Unanswered' ? unansweredQuestionIds : answeredQuestionIds} />
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