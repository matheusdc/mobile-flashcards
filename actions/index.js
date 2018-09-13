export const CREATE_DECK = 'CREATE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const RESET = 'RESET';

export function createDeck (deck) {
  return {
    type: CREATE_DECK,
    deck
  }
}

export function addCard (card, deck) {
  return {
    type: ADD_CARD,
    card,
    deck
  }
}

export function resetDecks () {
  return {
    type: RESET
  }
}