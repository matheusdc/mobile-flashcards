import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import FlipCard from 'react-native-flip-card';

import Button from '../components/Button'
import { italic } from 'ansi-colors';

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
        <FlipCard 
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          >
          {/* Face Side */}
          <View style={styles.faces}>
            <Text style={styles.flipInfo}>{this.props.location}</Text>
            <Text style={styles.question}>{this.props.question}</Text>
            <Text style={styles.flipInfo}>Tap to flip!</Text>
          </View>
          {/* Back Side */}
          <View style={styles.faces}>
            <Text style={styles.flipInfo}>{this.props.location}</Text>
            <Text style={styles.question}>{this.props.answer}</Text>
            <Text style={styles.flipInfo}>Tap to flip!</Text>
          </View>
        </FlipCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  faces: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 20
  },
  question: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  flipInfo: {
    alignSelf: 'flex-end',
    fontStyle: 'italic'
  }
});
