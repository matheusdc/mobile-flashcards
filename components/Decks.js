import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Entypo, Foundation } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { createDeck, resetDecks } from '../actions';
import { getDecks, reset } from '../utils/api';
import Button from './Button';

class Decks extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (<Foundation name='folder' size={25} color={tintColor} />)
  }
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

  componentDidMount() {
    getDecks().then((decks) => {
      const deckArray = Object.values(decks);
      deckArray.map(deck => {
        this.props.createDeck(deck);
      });
    })
    .catch(err => console.log('Error while fetching data from AsyncStorage: ', err));
  }

  handleReset = () => {
    this.props.resetDecks();
    reset();
  }

  render() {

    if(this.props.decks.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Entypo name='emoji-sad' size={100} />
          <Text style={{paddingTop: 10, fontWeight: 'bold'}}>There are no decks created yet...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        { (this.props.decks.length === 0 && <Text>No decks available...</Text>)}
        <FlatList 
          contentContainerStyle={styles.listContainer}
          data={this.props.decks}
          keyExtractor={(item) => item.title}
          renderItem={this._renderItem}
        />
        <Button label='Reset App Storage' onPress={this.handleReset} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    borderColor: '#aaa',
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

const mapDispatchToProps = (dispatch) => {
  return {
      createDeck: (deck) => dispatch(createDeck(deck)),
      resetDecks: () => dispatch(resetDecks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Decks)