import { CREATE_DECK, ADD_CARD, RESET } from '../actions'

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

export default function reducer(state = {}, action) {
  const { deck, card } = action;
  switch(action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [deck.title]: deck,
      };
    case ADD_CARD:
      return {
        ...state,
        [deck.title]: {
          ...deck,
          questions: deck.questions.concat([card])
        }
      };
    case RESET:
      return {};
    default:
      return state
  }
}