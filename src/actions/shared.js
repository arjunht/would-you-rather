import { _getQuestions, _getUsers } from '../utils/_DATA.js'
import { receiveQuestions } from './questions.js'
import { receiveUsers } from './users.js'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialQuestions() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      })
  }
}

export function handleInitialUsers() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
        dispatch(hideLoading());
      })
  }
}