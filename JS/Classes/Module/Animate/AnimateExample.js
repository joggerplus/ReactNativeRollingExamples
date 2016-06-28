'use strict';


var PanResponderExample = require('./PanResponderExample');
var LayoutAnimationExample = require('./LayoutAnimationExample');
var AnimatedExample = require('./AnimatedExample');


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


class AnimateExample extends Component {
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
        {"title": "PanResponderExample","detail":"PanResponder的使用"},
        {"title": "LayoutAnimationExample","detail":"用于全局的布局动画LayoutAnimation 的使用"},
        {"title": "AnimatedExample","detail":"用于创建更精细的交互控制的动画Animated的使用"},                        
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
        component: PanResponderExample,
        passProps: {contentData},
      });
    }else if (rowNumber === 1) {
      this.props.navigator.push({
        title: contentData.title,
        component: LayoutAnimationExample,
        passProps: {contentData},
      });
    }else if (rowNumber === 2) {
      this.props.navigator.push({
        title: contentData.title,
        component: AnimatedExample,
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

module.exports = AnimateExample;

