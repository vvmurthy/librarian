import React, { Component } from 'react';
import { 
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet
} from 'react-native';

export default class BookItem extends Component {
  render() {
    const book = this.props.book;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.navigation.navigate('Book', { book: book })
        }}
      >
        <View style={styles.listItem}>
           <Text style={styles.bookDescription}>{"@" + book.login}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 30,
    borderBottomColor: '#7f8c8d',
    borderBottomWidth: 1
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  bookDescription: {
    fontSize: 16
  }
});