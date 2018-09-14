import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { background, text } from '../utils/colors';

import Button from '../components/Button';
import { clearLocalNotifications, setLocalNotification } from '../utils/notifications';

export default class DeckView extends Component {
  static navigationOptions = {
    title: 'Deck',
    headerStyle: {
      backgroundColor: background,
    },
    headerTintColor: text,
    headerTitleStyle: {
      fontWeight: 'bold'
    } 
  }

  constructor(props) {
    super(props);

    const deck = this.props.navigation.getParam('deck');

    this.state = {
      deck,
    }
  }

  componentDidUpdate() {
    const deck = this.props.navigation.getParam('deck');
    if(JSON.stringify(deck) !== JSON.stringify(this.state.deck))
      this.setState({ deck });
  }

  _startQuiz = () => {
    this.props.navigation.navigate('QuizView', { deck: this.state.deck });

    clearLocalNotifications()
      .then(setLocalNotification);
  }

  _addCard = () => {
    this.props.navigation.navigate('AddCard', { deck: this.state.deck });
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.deckSummary}>
          <Text style={styles.title}>{this.state.deck.title}</Text>
          <Text style={styles.subtitle}>{`${this.state.deck.questions.length} card${(this.state.deck.questions.length > 1) ? 's' : '' }`}</Text>
        </View>
        <View>
          <Button label='Add Card' onPress={this._addCard}></Button>
          {(this.state.deck.questions.length !== 0 && <Button label='Start Quiz' onPress={this._startQuiz} />)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckSummary: {
    alignItems: 'center',
    marginBottom: 40
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    margin: 5
  },
});
