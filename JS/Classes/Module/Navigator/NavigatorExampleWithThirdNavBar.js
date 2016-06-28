'use strict';

import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
    Navigator
} from 'react-native';


var NavigatorExampleWithThirdNavBar1 = require('./NavigatorExampleWithThirdNavBar1');

var NavigationBar = require('../../../Vendor/react-native-navbar');

class NavigatorExampleWithThirdNavBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onPressBack() {
      this.props.navigator.pop()
  }

  render() {
    var leftButtonConfig = {
      title: 'back',
      handler: ()=>this.onPressBack()
    };

    var rightButtonConfig = {
      title: 'Next',
      handler: ()=>this.onPressAction()
    };



    var titleConfig = {
      title: 'ThirdNavBar',
    };


    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig} 
          leftButton={leftButtonConfig}
        />
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>this.onPressAction()}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              Touch me to next
            </Text>
          </TouchableOpacity>

        </View>
      </View>

    );
  }


  onPressAction() {
    this.props.navigator.push({
      title: "ThirdNavBar1",
      component: NavigatorExampleWithThirdNavBar1,
    });
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

module.exports = NavigatorExampleWithThirdNavBar;

