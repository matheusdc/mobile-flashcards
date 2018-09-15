import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated  } from 'react-native';

import Button from '../components/Button'

export default class QuizResults extends Component {

  state = {
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity } = this.state;

    Animated.timing(opacity, { toValue: 1, velocity: 2 }).start();
  }

  render() {
    const { opacity } = this.state;
    const percentage = Math.ceil((this.props.correct / this.props.total) * 100);
    return (
      <Animated.View style={[styles.resultsContainer, { opacity }]}>
        <View style={styles.results}>
          <Text style={styles.message}>You got</Text>
          <Text style={styles.percentage}>{percentage}%</Text>
          <Text style={styles.message}>correct!</Text>
        </View>
        <View>
          <Button label='Restart Quiz' onPress={this.props.restartQuiz}></Button>
          <View style={styles.cardActions}>
            <Button label='Back' onPress={this.props.handleBackButton}></Button>
            <Button label='Home' onPress={this.props.handleBackToHome}></Button>
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  results: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  message: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
  percentage: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold'
  },
  cardActions: {
    flexDirection: 'row'
  },
});
