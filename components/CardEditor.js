import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { background, text } from '../utils/colors'
import Button from './Button';
import { addCard } from '../actions'

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
    const card = {
      ...this.state,
    }

    const deck = this.props.navigation.getParam('deck');

    this.props.addCard(card, deck);

    const newDeck = {...deck, questions: deck.questions.concat([card])};

    this.props.navigation.navigate('DeckView', { deck: newDeck })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          name='question'
          style={styles.textInput}
          onChangeText={this._handleQuestionChange}
          value={this.state.question}
          placeholder={'Question'}
        />
        <TextInput
          name='answer'
          style={styles.textInput}
          onChangeText={this._handleAnswerChange}
          value={this.state.answer}
          placeholder={'Answer'}
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