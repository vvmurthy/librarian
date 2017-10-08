import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image
} from 'react-native';

export default class BookScreen extends Component {
  /*
    Set the StackNavigator options so our screen's title says Book
  */
  static navigationOptions = {
    title: 'Github Profile',
  };

  state = {
    profile: [],
    loaded: false
  }


  render() {
    /*
      Grab the data that may have been passed to this screen through the navigator
    */
    const { params } = this.props.navigation.state;

    if(this.state.loaded == false){
        fetch('https://api.github.com/users/' + params.book.login)
            .then((res) => res.json())
            .then((data) => {
              this.setState({
                profile: data,
                loaded: true
              });
            });
     }

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.name}>{this.state.profile.name}</Text>
          <Text style={styles.username}>{"@" + params.book.login}</Text>

          <Image
            style={styles.thumbnail}
            resizeMode='contain'
            source={{uri: params.book.avatar_url}}
          />

          <Text style={styles.username}>{"Score: " + params.book.score}</Text>
          <Text style={styles.bio}>{"Bio: " + this.state.profile.bio}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 20
  },
  thumbnail: {
    width: 200,
    height: 200,
    flex: 1,
    marginTop: 20,
    marginBottom: 20
  },
  bio: {
    fontSize: 15,
    textAlign: 'left',
    lineHeight: 20,
    padding: 15
  },
  name: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 20,
    padding: 15
    },
  username: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 20,
    padding: 15
    }
});