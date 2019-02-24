import { _saveQuestionAnswer } from '../utils/_DATA.js'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function saveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleSaveQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => dispatch(saveQuestionAnswer({
        authedUser,
        qid,
        answer
      })))
  }
}