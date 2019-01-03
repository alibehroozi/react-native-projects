
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LazyloadScrollView } from 'react-native-lazyload-deux';
import ChatItem from './chatItem';


type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topnav}>
          <Text style={styles.navtext}>Welcome to chat App</Text>
        </View>
        <LazyloadScrollView name="unique-lazyload-list-name" style={styles.chats}>
          {[...Array(200)].map((e, i) =>
            <ChatItem key={i} index={i} />
          )}
        </LazyloadScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  navtext: {
    color: '#ffffff',
    alignSelf: 'center'
  },
  topnav: {
    alignSelf: 'stretch',
    flexBasis: 50,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#398653'
  },
  chats: {
    flex: 1,
    backgroundColor: '#ffffff'
  }

});
