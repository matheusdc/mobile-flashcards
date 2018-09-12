import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Decks extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('DeckView', { deck: item}) }}>
        <View style={styles.listItem}>
          <Text>{item.title}</Text>
          <Text style={styles.subtitle}>{item.questions.length} cards</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          contentContainerStyle={styles.listContainer}
          data={this.props.decks}
          keyExtractor={(item) => item.title}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
  },
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

function mapStateToProps (state) {
  const decks = Object.values(state);
  return {
    decks,
  }
}

export default connect(mapStateToProps)(Decks)