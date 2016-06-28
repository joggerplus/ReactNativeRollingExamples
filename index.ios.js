
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator
} from 'react-native';
var ExampleList = require('./JS/Classes/Module/Menu/ExampleList');
var NavigatorExampleWithNavigationBar = require('./JS/Classes/Module/Menu/NavigatorExampleWithNavigationBar');
var MenuManager = require('NativeModules').MenuManager;


class ReactNativeRollingExamples2 extends Component {
  render() {
    return (
      <Navigator style = {{flex: 1}}
        initialRoute={{
          component: NavigatorExampleWithNavigationBar
        }}
        renderScene={(route, navigator) => {
          return <route.component navigator={navigator} {...route} {...route.passProps}/>
        }}/>
    );
  }
}

class ReactNativeRollingExamples1 extends Component {
  constructor(props) {
    super(props);
    this.onLeftButtonPress = this.onLeftButtonPress.bind(this);

  }
  onLeftButtonPress(){
    MenuManager.showMenu('test',(error,events) => {
      if (error) {
      }else{
      };
    });
  }

  render() {
    return (
      <NavigatorIOS
        style={{flex : 1, marginTop : 0}}
        initialRoute={{
          title: 'ReactNative RollingExamples',
          component: ExampleList, 
          leftButtonTitle: 'Menu',
          onLeftButtonPress: this.onLeftButtonPress,
        }} />        );
    }
}


AppRegistry.registerComponent('ReactNativeRollingExamples1', () => ReactNativeRollingExamples1);
AppRegistry.registerComponent('ReactNativeRollingExamples2', () => ReactNativeRollingExamples2);

