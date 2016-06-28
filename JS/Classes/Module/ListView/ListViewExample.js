/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';


var SimpleListView = require('./SimpleListView');
var SGListViewExample = require('./SGListViewExample');
var UITableViewExample = require('./UITableViewExample');
var CustomCellTableView = require('./CustomCellTableView');
var RefreshTableView = require('./RefreshTableView');
var ListViewWithRefresh = require('./ListViewWithRefreshExample/ListViewWithRefresh');


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


class ListViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
 

  }

  componentDidMount() {
     var responseData = [
        {"title": "SimpleListView","detail":"简单的使用listview，测试大量数据listview性能"},
        {"title": "SGListViewExample","detail":"SGListView第三方库的使用"},
        {"title": "UITableViewExample","detail":"iOS的UITableView桥接"},
        {"title": "CustomCellTableView","detail":"自定义cell的UITableView"},
        {"title": "RefreshTableView","detail":"带上拉下拉的UITableView"},
        {"title": "ListViewWithRefresh","detail":"listview的上拉下拉，及获取网络数据（objc的github排名数据为例）"},                    
        ]
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.listView}
      />
    );
  }
  
  renderRow(contentData, sectionID, rowID) {
    return (
      <TouchableOpacity onPress={()=>this.onPressRow(contentData,rowID)}>
        <View style={styles.container}>
          <Text style={styles.title}>{contentData.title}</Text>
          <Text style={styles.detail}>{contentData.detail}</Text>
        </View>
      </TouchableOpacity>

    );
  }

  onPressRow(contentData,rowID) {

    var rowNumber=Number(rowID);
    if (rowNumber === 0) {
      this.props.navigator.push({
        title: contentData.title,
        component: SimpleListView,
        passProps: {contentData},
      });
    }else if (rowNumber === 1) {
      this.props.navigator.push({
        title: contentData.title,
        component: SGListViewExample,
        passProps: {contentData},
      });
    }else if (rowNumber === 2) {
      this.props.navigator.push({
        title: contentData.title,
        component: UITableViewExample,
        passProps: {contentData},
      });
    }else if (rowNumber === 3) {
      this.props.navigator.push({
        title: contentData.title,
        component: CustomCellTableView,
        passProps: {contentData},
      });
    }else if (rowNumber === 4) {
      this.props.navigator.push({
        title: contentData.title,
        component: RefreshTableView,
        passProps: {contentData},
      });
    }else if (rowNumber === 5) {
      this.props.navigator.push({
        title: contentData.title,
        component: ListViewWithRefresh,
        passProps: {contentData},
      });
    }
  }

     

}

var styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginRight: 5,
    height: 64,
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
  },
  detail: {
    marginTop: 5,
    height:14,
    textAlign: 'center',
    fontSize: 12,

  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
});

module.exports = ListViewExample;

