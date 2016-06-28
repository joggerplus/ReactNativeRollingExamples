'use strict';


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  Image
} from 'react-native';
var NavigatorExampleWithThirdNavBar = require('./NavigatorExampleWithThirdNavBar');

var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity
                style={{flex: 1, justifyContent: 'center',backgroundColor:'white'}}
                onPress={() => navigator.parentNavigator.pop()}>
                <Image
                    source={require('image!backArrow')}
                    style={{width: 30, height:30,margin:15,tintColor: 'black'}}/>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, navState) {
        return null;
    },
    Title(route, navigator, index, navState) {
        return (
              <Text style={{color: 'black', margin: 10, fontSize: 20}}>
                NavigationBar1
              </Text>

        );
    }
};


class NavigatorExampleWithNavigationBar1 extends Component {
  constructor(props) {
    super(props);
    this.onPressAction = this.onPressAction.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  onPressAction() {
      this.props.navigator.push({
        title: "ThirdNavBar",
        component: NavigatorExampleWithThirdNavBar,
      });
  }


  renderScene(route, navigator) {
    return (
      <View style={{ flex: 1, }}>
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
  render() {
    return (<Navigator renderScene={this.renderScene}
                           navigator={this.props.navigator}
                           navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: 'white'}}
                routeMapper={NavigationBarRouteMapper} />
          }/>);

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

module.exports = NavigatorExampleWithNavigationBar1;