import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../utils/_DATA.js';
import { receiveQuestions, saveQuestionAnswer } from './questions.js';
import { receiveUsers, updateUserAnswer } from './users.js';
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