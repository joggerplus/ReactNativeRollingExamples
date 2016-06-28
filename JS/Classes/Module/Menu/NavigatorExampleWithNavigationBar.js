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
var NavigatorExampleWithNavigationBar1 = require('../Navigator/NavigatorExampleWithNavigationBar1');
var MenuManager = require('NativeModules').MenuManager;


var NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return (
            <TouchableOpacity
                style={{flex: 1, justifyContent: 'center',backgroundColor:'white'}}
                onPress={() => {
                    MenuManager.showMenu('test',(error,events) => {
                        if (error) {
                        }else{
                        };
                    });                }}>
                <Text style={{width: 50,height:22,textAlign:'center',fontSize:17,color:'#2F92FE',marginLeft:3,backgroundColor:'white'}}>Menu</Text>
            </TouchableOpacity>
        );
    },
    RightButton(route, navigator, index, navState) {
        return null;
    },
    Title(route, navigator, index, navState) {
        return (
            <Text style={{color: 'black', margin: 10, fontSize: 20}}>
                navigator example
            </Text>
        );
    }
};



class NavigatorExampleWithNavigationBar extends Component {
  constructor(props) {
    super(props);
    this.onPressAction = this.onPressAction.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }
  
  onPressAction() {
    this.props.navigator.push({
      title: "NavigationBar1",
      component: NavigatorExampleWithNavigationBar1,
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
              touch me to next page
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
                <Navigator.NavigationBar 
                  style={{backgroundColor: 'white'}}
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

module.exports = NavigatorExampleWithNavigationBar;