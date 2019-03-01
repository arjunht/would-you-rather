export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER';
export const UPDATE_QUESTIONS = 'UPDATE_QUESTIONS';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function updateUserAnswer({ authedUser, qid, answer }) {
  return {
    type: UPDATE_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function updateQuestions(question) {
  return {
    type: UPDATE_QUESTIONS,
    question
  };
}