import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default class Button extends Component {
  render() {
    
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[ styles.button ]}>
          <Text>{ this.props.label }</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    margin: 5
  },
});
