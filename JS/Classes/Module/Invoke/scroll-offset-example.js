import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
var Invoke = require('../../../Vendor/react-native-invoke/');

export default class ScrollOffsetExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}} ref='scroll'>
          <Image style={{width: 320, height: 560}} source={{uri: 'http://i.imgur.com/Q6PCl4B.jpg'}} />
        </ScrollView>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text key='1'>Scroll the cat ScrollView above..</Text>
          <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
            <Text style={{color: 'blue', marginVertical: 20}}>Get Scroll Offset</Text>
          </TouchableOpacity>
          <Text key='3'>Scroll Offset: {this.state.value}</Text>
        </View>
      </View>
    );
  }
  async onButtonPress() {
    //ObjC:  CGPoint result = [componentView.scrollView contentOffset];
    const _rctScrollView = Invoke.React.view(this.refs['scroll']);
    const _getScrollView = Invoke.call(_rctScrollView, 'scrollView');
    const _getOffset = Invoke.call(_getScrollView, 'contentOffset');
    const {x, y} = await Invoke.execute(_getOffset);
    this.setState({
      value: `${Math.round(y)}`
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
