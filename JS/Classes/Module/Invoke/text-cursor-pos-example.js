import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
var Invoke = require('../../../Vendor/react-native-invoke/');

export default class TextCursorPosExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput ref='input' multiline={true}
          style={{flex: 1, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 10, fontSize: 20}}
          value='hello world hello world hello world hello world hello world hello world hello world hello world hello world'
        />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text key='1'>Place cursor in the TextInput above..</Text>
          <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
            <Text style={{color: 'blue', marginVertical: 20}}>Get Cursor Pos</Text>
          </TouchableOpacity>
          <Text key='3'>Cursor Pos: {this.state.value}</Text>
        </View>
      </View>
    );
  }
  async onButtonPress() {
    //ObjC:  id textView = [componentView valueForKey:@'_textView'];
    //ObjC:  CGRect result = [textView caretRectForPosition:textView.selectedTextRange.start];
    const _rctTextInput = Invoke.React.view(this.refs['input']);
    const _getTextView = Invoke.call(_rctTextInput, 'valueForKey:', '_textView');
    const _getSelectedTextRange = Invoke.call(_getTextView, 'selectedTextRange');
    const _getStartPosition = Invoke.call(_getSelectedTextRange, 'start');
    const _getCaretRect = Invoke.call(_getTextView, 'caretRectForPosition:', _getStartPosition);
    const {x, y, width, height} = await Invoke.execute(_getCaretRect);
    this.setState({
      value: `(${Math.round(x)},${Math.round(y)})`
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
