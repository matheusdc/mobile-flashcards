import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { background, text } from '../utils/colors';

import Card from '../components/Card';
import QuizResults from '../components/QuizResults';
import Button from '../components/Button';

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

  _handleCorrect = () => {
    this.setState({ correctAnswers: this.state.correctAnswers + 1 });
    this._handleNextQuestion();
  }

  _handleNextQuestion = () => {
    if(this.state.activeQuestionIndex < this.state.questions.length){
      this.setState({ activeQuestionIndex: this.state.activeQuestionIndex + 1 });
      return;
    }
  }

  handleRestartQuiz = () => {
    this.setState({ activeQuestionIndex: 0, correctAnswers: 0 });
  } 

  handleBackButton = () => {
    this.props.navigation.navigate('Decks');
  }

  render() {
    const { questions, activeQuestionIndex, correctAnswers } = this.state;
    const activeQuestion = questions[activeQuestionIndex];

    return (
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          {(activeQuestionIndex < questions.length)
          ? <View style={styles.container}>
              <View style={styles.cardContainer}>
                <Card question={activeQuestion.question} 
                  answer={activeQuestion.answer} 
                  location={`${activeQuestionIndex + 1}/${questions.length}`}/>
              </View>
              <View style={styles.cardActions}>
                <Button label='Correct' onPress={this._handleCorrect}></Button>
                <Button label='Incorrect' onPress={this._handleNextQuestion}></Button>
              </View>
            </View>
          : <QuizResults 
              correct={correctAnswers} 
              total={questions.length}
              restartQuiz={this.handleRestartQuiz}
              handleBackButton={this.handleBackButton} />}
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
    marginBottom: 10
  },
  question: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
  cardActions: {
    flexDirection: 'row'
  },
  cardContainer: {
    flex: 1,
  }
});
