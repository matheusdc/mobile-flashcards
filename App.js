import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { background, text } from './utils/colors';

import Decks from './components/Decks';
import DeckEditor from './components/DeckEditor';
import DeckView from './views/DeckView';
import QuizView from './views/QuizView';

import reducer from './reducers';
import CardEditor from './components/CardEditor';

const Tabs = createBottomTabNavigator({
  'Decks': {
    screen: Decks,
  },
  'New Deck': {
    screen: DeckEditor
  }
});

const Stack =  createStackNavigator({
  'MobileFlashcards': {
    screen: Tabs,
    navigationOptions: {
      title: 'Mobile Flashcards',
      headerStyle: {
        backgroundColor: background,
      },
      headerTintColor: text,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  },
  'DeckView': {
    screen: DeckView
  },
  'QuizView': {
    screen: QuizView
  },
  'AddCard': {
    screen: CardEditor
  },
});

export default class App extends Component {
  render() {
    return(
      <Provider store={createStore(reducer)}>
        <Stack />
      </Provider>
    );
  }
}