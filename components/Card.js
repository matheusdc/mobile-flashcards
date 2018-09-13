import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';

import Button from '../components/Button'

export default class Card extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      flipped: false
    }
  }

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped });
  }

  render() {
    return (
      <View style={styles.questionContainer}>
        <View>
          <Text style={styles.question}>{(!this.state.flipped) ? this.props.question : this.props.answer}</Text>
        </View>
        <View>
            <Button label={(!this.state.flipped) ? 'flip to check answer' : 'go back to the question'} onPress={this.flipCard}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    alignItems: 'center',
    marginBottom: 40
  },
  question: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  }
});
