'use strict';

import ReduxExample from '../Redux/index';
var ListViewExample = require('../ListView/ListViewExample');
var AnimateExample = require('../Animate/AnimateExample');
var InvokeExample = require('../Invoke/InvokeExample');


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







class ExampleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };



  }

  componentDidMount() {
     var responseData = [
            {"title": "ListView","detail":"listview，sglistview，tableview性能对比，演示如何获取网络数据"},

            {"title": "AnimateExample","detail":"PanResponder，LayoutAnimation，Animate的使用"},
            {"title": "redux","detail":"redux的使用"},
            {"title": "invoke","detail":"invoke ObjC"},
                
                             
        ]
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData),
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
                <TouchableOpacity onPress={()=>this.onPressRow(contentData,sectionID,rowID)}>

      <View style={styles.container}>
                  <Text style={styles.title}>{contentData.title}</Text>
          <Text style={styles.detail}>{contentData.detail}</Text>
                                      </View>

                  </TouchableOpacity>

    );
  }

    onPressRow(contentData, sectionID, rowID) {

          var rowNumber=Number(rowID);
      if (rowNumber === 0) {
this.props.navigator.push({
            title: contentData.title,
            component: ListViewExample,
            passProps: {contentData},
        });


      }else if(rowNumber===1){

this.props.navigator.push({
            title: contentData.title,
            component: AnimateExample,
            passProps: {contentData},
        });

      }else if(rowNumber===2){
this.props.navigator.push({
            title: contentData.title,
            component: ReduxExample,
            passProps: {contentData},
        });

      }else if(rowNumber===3){

this.props.navigator.push({
            title: contentData.title,
            component: InvokeExample,
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
    height:17,
    textAlign: 'center',
            fontSize: 13,

  },
  listView: {

    backgroundColor: '#F5FCFF',
  },
});

module.exports = ExampleList;

