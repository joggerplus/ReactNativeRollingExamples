
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

var responseData = require('../../../Resources/test.json');

class SimpleListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData),
    });
  }

  render() {
    return (
      <ListView
        style={styles.listView}
        initialListSize={responseData.length/20}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        renderHeader={this.renderHeaderView.bind(this)}
      />
    );
  }
  
  renderHeaderView() {
    return (
      <View style={styles.container,{backgroundColor:'#F5FCFF',height:64}}>
          <Text style={styles.title}>this is  a  headerView</Text>
          <Text style={styles.detail}></Text>
       </View>
    );
  }

  renderRow(contentData,sectionID,highlightRow) {
    return (
      <TouchableOpacity onPress={()=>this.onPressRow(contentData,sectionID,highlightRow)}>
        <View style={styles.container}>
          <Text style={styles.title}>{contentData.title}</Text>
          <Text style={styles.detail}>{contentData.detail}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  onPressRow(contentData,sectionID,highlightRow) {
    alert('title='+contentData.title+' sectionID='+sectionID+' highlightRow='+highlightRow)
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

module.exports = SimpleListView;

