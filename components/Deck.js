import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default Deck = (props) => {
  return (
    <TouchableOpacity onPress={() => { props.navigate('DeckView', props.item) }}>
      <View style={style.listItem}>
        <Text>{props.item.title}</Text>
        <Text style={style.subtitle}>{props.item.questions.length} cards</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    flex: 1,
    height: 64,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 10
  },
  subtitle: {
    color: 'gray'
  }
});
