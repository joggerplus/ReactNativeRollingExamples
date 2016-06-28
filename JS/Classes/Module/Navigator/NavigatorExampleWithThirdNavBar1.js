'use strict';


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
var NavigationBar = require('../../../Vendor/react-native-navbar');

class NavigatorExampleWithThirdNavBar1 extends Component {
  onPressBack() {
    this.props.navigator.pop()
  }

  onPressAction() {
    alert('end page')  
  }

  render() {

    var leftButtonConfig = {
      title: 'back',
      handler: ()=>this.onPressBack()
    };

    var titleConfig = {
      title: 'ThirdNavBar1',
    };

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          leftButton={leftButtonConfig} />

        <View style={styles.container}>
          <TouchableOpacity onPress={()=>this.onPressAction()}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
                end page
            </Text>
          </TouchableOpacity>

        </View>
      </View>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = NavigatorExampleWithThirdNavBar1;
