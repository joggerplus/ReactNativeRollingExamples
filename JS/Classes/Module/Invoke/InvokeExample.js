'use strict';


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch
} from 'react-native';
import ScrollOffsetExample from './scroll-offset-example';
import TextCursorPosExample from './text-cursor-pos-example';
import RefreshControlPosExample from './refresh-control-pos-example';

class InvokeExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: undefined
    };
  }
   

  render() {
    if (this.state.example) {
      const Example = this.state.example;
      return (
        <Example />
      );
    }
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => this.setState({example: ScrollOffsetExample})}>
          <Text style={{color: 'blue', fontSize: 17, marginBottom: 20}}>
            Get ScrollView Offset
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({example: TextCursorPosExample})}>
          <Text style={{color: 'blue', fontSize: 17, marginBottom: 20}}>
            Get TextInput Cursor Position
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({example: RefreshControlPosExample})}>
          <Text style={{color: 'blue', fontSize: 17, marginBottom: 20}}>
            RefreshControl Component Position
          </Text>
        </TouchableOpacity>

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
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = InvokeExample;
