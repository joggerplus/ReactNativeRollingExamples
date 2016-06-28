/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */




import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';
var TableView = require('../../../Vendor/react-native-tableview');

var Section = TableView.Section;
var Item = TableView.Item;
var Cell = TableView.Cell;
var RNTableViewManager = require('NativeModules').RNTableViewManager;
var ReactNative = require('ReactNative');


class RefreshTableView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []     
      };
      this.refreshAction = this.refreshAction.bind(this);

    }

    componentWillMount() {
      var numItems = 19;
        for (var i = 0; i < numItems; ++i) {
            this.state.items.push({title:"title"+i,detail:"detail"+i});
      }
    }
    refreshAction(event){

      if (event.isHeader) {
        RNTableViewManager.endRefresh(event.tableViewTag,event.isHeader);
      }else{
        this.state.items.push({title:"title new ",detail:"detail new"});
        this.setState({
          items:this.state.items
        });
        RNTableViewManager.endRefresh(event.tableViewTag,event.isHeader);
      }
    }

    render() {
        return (
          <View style ={styles.container}>
            <TableView 
              reactModuleForCell="TableViewExampleCell" 
              style={styles.tableContainer} 
              allowHeaderRefresh={true} 
              allowFootererRefresh={true}
              onRefresh={(event) => {setTimeout(()=>this.refreshAction(event),3000);}}
              onPress={(event) => alert(this.state.items.length)}
            >
                <Section >
                  {this.state.items.map((i)=><Item key={i.title} title={i.title} detail={i.detail} height={44} />)}
                </Section>
            </TableView>

          </View>
        );
    }
}
class TableViewExampleCell extends React.Component {
    render(){
        return (
            <View style={styles.cellContainer}>
                <Text style={styles.title}>{this.props.data.title}</Text>
                <Text style={styles.detail}>{this.props.data.detail}</Text>
            </View>
        );
    }
}


var styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'yellow',
    borderColor:'blue',
    borderWidth:1,
    marginTop: 68,
    marginBottom: 56,
    flex: 1,        
  },

  tableContainer: {
    marginLeft: 0,
    marginRight: 5,
    backgroundColor: 'white',
    flex: 1,
    borderColor:'blue',
    borderWidth:1,
  },

  cellContainer: {
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
    height:14,
    textAlign: 'center',
    fontSize: 12,
  },
  listView: {
    backgroundColor: '#F5FCFF',
  },
});




module.exports = RefreshTableView;

AppRegistry.registerComponent('TableViewExampleCell', () => TableViewExampleCell);

