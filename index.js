import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './App';
import Next from './Next';
import { StackNavigator } from "react-navigation";

const reactNavigation = props => {
    return <App navigation={props.navigation} />;
  };

const MyAwesomeApp = StackNavigator({
    App: { screen: reactNavigation },
    Next: { screen: Next }
    }, {
    headerMode: 'none',
    mode: 'modal'
});

AppRegistry.registerComponent('MyAwesomeApp', () => MyAwesomeApp);
