import { RECEIVE_USERS, UPDATE_USER_ANSWER, UPDATE_QUESTIONS } from '../actions/users';

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      };
    case UPDATE_USER_ANSWER :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    case UPDATE_QUESTIONS :
      const authedUser = action.question.author;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([action.question.id])
        }
      };
    default :
      return state;
  }
}