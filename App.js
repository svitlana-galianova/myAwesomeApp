import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Button
} from 'react-native';

import myAwesomeStyles from './styles/myAwesomeStyles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  onHandlePress(){
    this.props.navigation.navigate('Next');
  }
  render() {
    return (
      <View style={myAwesomeStyles.container}>
        <Text style={myAwesomeStyles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={myAwesomeStyles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={myAwesomeStyles.instructions}>
          {instructions}
        </Text>
        <Button onPress={this.onHandlePress.bind(this)} title="Go to next"></Button>
      </View>
    );
  }
}

