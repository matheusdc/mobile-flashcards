import { AsyncStorage } from 'react-native';

const STORAGE_KEY = '@MobileFlashcards:201809131221';

export function submitDeck(deck) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [deck.title]: deck,
  }));
}

export function removeDeck({ title }) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[title] = undefined;
      delete data[title];
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    });
}

export function getDecks() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      resolve(data || {});
    })
    .catch((err) => {
      reject(err);
    });
  })
}

export function reset() {
  console.log('*** RESETING APP STORAGE ***');
  return AsyncStorage.removeItem(STORAGE_KEY);
}