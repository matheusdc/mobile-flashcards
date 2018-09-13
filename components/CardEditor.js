import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { background, text } from '../utils/colors'
import Button from './Button';
import { addCard } from '../actions'
import { submitDeck } from '../utils/api';

class CardEditor extends React.Component {
  static navigationOptions = {
    title: 'Add Card',
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

    this.state = {
      question: '',
      answer: ''
    }
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  _handleQuestionChange = (value) => {
    this.handleChange('question', value);
  }

  _handleAnswerChange = (value) => {
    this.handleChange('answer', value);
  }

  handleSubmit = () => {

    if(this.state.question.length === 0) {
      return alert('Please fill the question field');
    }

    if(this.state.answer.length === 0) {
      return alert('Please fill the answer field');
    }

    const card = {
      ...this.state,
    }

    const deck = this.props.navigation.getParam('deck');

    this.props.addCard(card, deck);

    const newDeck = {...deck, questions: deck.questions.concat([card])};

    submitDeck(newDeck);

    this.props.navigation.navigate('DeckView', { deck: newDeck })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.label}>Question</Text>
        <TextInput
          name='question'
          style={styles.textInput}
          onChangeText={this._handleQuestionChange}
          value={this.state.question}
          placeholder={'What do you want to remember?'}
        />
        <Text style={styles.label}>Answer</Text>
        <TextInput
          name='answer'
          style={styles.textInput}
          onChangeText={this._handleAnswerChange}
          value={this.state.answer}
          placeholder={'The answer for the question above'}
        />
        <Button label="Save" onPress={this.handleSubmit} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
  textInput: {
    padding: 5,
    height: 40,
    width: 240,
    margin: 10,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card, deck) => dispatch(addCard(card, deck))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CardEditor);