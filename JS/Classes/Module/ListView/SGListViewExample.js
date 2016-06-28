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
} from 'react-native';

import SGListView from '../../../Vendor/react-native-sglistview'
var responseData = require('../../../Resources/test.json');

class SGListViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData),
    });
  }

  render() {
    return (
      <SGListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.listView}
      />
    );
  }

  renderRow(contentData) {
    return (
      <TouchableOpacity onPress={()=>this.onPressRow(contentData)}>
        <View style={styles.container}>
          <Text style={styles.title}>{contentData.title}</Text>
          <Text style={styles.detail}>{contentData.detail}</Text>
        </View>
      </TouchableOpacity>

    );
  }

  onPressRow(contentData) {
  }

}

var styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginRight: 5,
    height: 44,
    backgroundColor: 'white',
    flex: 1,
    borderBottomColor:'red',
    borderBottomWidth:1,
  },
  title: {
    fontSize: 20,
    marginTop: 0,
    height:20,
    textAlign: 'center',
    fontSize: 15,
  },
  detail: {
    marginTop: 5,
    height:17,
    textAlign: 'center',
    fontSize: 12,
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
});

module.exports = SGListViewExample;

