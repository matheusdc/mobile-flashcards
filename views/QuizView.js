import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { background, text } from '../utils/colors';

import Button from '../components/Button'

export default class QuizView extends Component {
  static navigationOptions = {
    title: 'Quiz',
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
      ...deck,
      activeQuestionIndex: 0,
      correctAnswers: 0,
    }
  }

  _startQuiz = () => {
    this.props.navigation.navigate('');
  }
  
  _handleCorrect = () => {
    this.setState({ correctAnswers: this.state.correctAnswers + 1 });
    this._handleNextQuestion();
  }

  _handleNextQuestion = () => {
    if(this.state.activeQuestionIndex < this.state.questions.length - 1){
      this.setState({ activeQuestionIndex: this.state.activeQuestionIndex + 1 });
      return;
    }
    this.props.navigation.navigate('ResultsView');
  }

  render() {
    const { questions, activeQuestionIndex } = this.state;
    const activeQuestion = questions[activeQuestionIndex];

    return (
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <View>
            <Text style={styles.question}>{activeQuestion.question}</Text>
          </View>
          <View>
            <Button label='Correct' onPress={this._handleCorrect}></Button>
            <Button label='Incorrect' onPress={this._handleNextQuestion}></Button>
        </View>
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
