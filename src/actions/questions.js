import { _saveQuestion } from '../utils/_DATA.js';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
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
      .then((question) => dispatch(saveQuestion(question)))
      .then(() => dispatch(hideLoading()))
  };
}