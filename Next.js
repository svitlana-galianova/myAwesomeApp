import React, { Component } from 'react';
import { Platform, Text, View, Button } from 'react-native';

import myAwesomeStyles from './styles/myAwesomeStyles';

export default class Next extends Component<{}> {
  onHandlePress(){
    this.props.navigation.navigate('App');
  }
  render() {
    return (
      <View style={myAwesomeStyles.container}>
        <Text style={myAwesomeStyles.welcome}>
          This is Next page!!!
        </Text>
        <Button onPress={this.onHandlePress.bind(this)} title="Go to main page"></Button>
      </View>
    );
  }
}

