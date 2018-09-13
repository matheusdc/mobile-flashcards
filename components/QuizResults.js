import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';

import Button from '../components/Button'

export default QuizResults = (props) => {
  const percentage = Math.ceil((props.correct / props.total) * 100);
  return (
    <View style={styles.resultsContainer}>
      <View style={styles.results}>
        <Text style={styles.message}>You got</Text>
        <Text style={styles.percentage}>{percentage}%</Text>
        <Text style={styles.message}>correct!</Text>
      </View>
      <View style={styles.cardActions}>
          <Button label='Restart Quiz' onPress={props.restartQuiz}></Button>
          <Button label='Back' onPress={props.handleBackButton}></Button>
      </View>
    </View>
  );
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
    marginTop: 10,
    flexDirection: 'row'
  },
});
