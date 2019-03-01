import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA.js';
import { receiveQuestions, saveQuestionAnswer, saveQuestion } from './questions.js';
import { receiveUsers, updateUserAnswer, updateQuestions } from './users.js';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialQuestions() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      })
  };
}

export function handleInitialUsers() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
        dispatch(hideLoading());
      })
  };
}

export function handleSaveQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => {
        dispatch(saveQuestionAnswer({
          authedUser,
          qid,
          answer
        }))
        dispatch(updateUserAnswer({
          authedUser,
          qid,
          answer
        }))
      })
      .then(() => dispatch(hideLoading()))
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return _saveQuestion({
      optionOneText, 
      optionTwoText,
      author: authedUser
    })
      .then((question) => {
        dispatch(saveQuestion(question))
        dispatch(updateQuestions(question))
      })
      .then(() => dispatch(hideLoading()))
  };
}