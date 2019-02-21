import { _getQuestions, _getUsers } from '../utils/_DATA.js'
import { receiveQuestions } from './questions.js'
import { receiveUsers } from './users.js'

export function handleInitialQuestions() {
  return (dispatch) => {
    return _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
      })
  }
}

export function handleInitialUsers() {
  return (dispatch) => {
    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
      })
  }
}