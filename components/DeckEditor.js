import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';

import { createDeck } from '../actions'

class DeckEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    }
  }

  _handleChange = (value) => {
    this.setState({
      title: value
    })
  }

  _handleSubmit = () => {
    const deck = {
      ...this.state,
      questions: []
    }
    
    this.props.createDeck(deck);

    this.props.navigation.navigate('DeckView', { deck })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.label}>What is the title of your new deck?</Text>
        <TextInput
          name='title'
          style={styles.textInput}
          onChangeText={this._handleChange}
          value={this.state.text}
        />
        <Button label="Save" onPress={this._handleSubmit}/>
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
    createDeck: (deck) => dispatch(createDeck(deck))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeckEditor);