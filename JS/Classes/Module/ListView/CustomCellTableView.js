



import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
var TableView = require('../../../Vendor/react-native-tableview');
var Section = TableView.Section;
var Item = TableView.Item;
var Cell = TableView.Cell;


class CustomCellTableView extends React.Component {
    render() {
        var numItems = 19;
        var items = [];
        for (var i = 0; i < numItems; ++i) {
            items.push({title:"title"+i,detail:"detail"+i});
        }
        return (
          <View style ={styles.container}>
            <TableView reactModuleForCell="TableViewExampleCell1" style={styles.tableContainer} onPress={(event) => alert(event.title)}>
                <Section >
                  {items.map((i)=><Item key={i.title} title={i.title} detail={i.detail} height={44} />)}
                </Section>
            </TableView>
          </View>
        );
    }
}
class TableViewExampleCell1 extends React.Component {
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
    marginRight: 5,
    backgroundColor: 'yellow',
    borderColor:'blue',
    borderWidth:1,
    marginTop: 68,
    marginBottom: 56,
    flex: 1,       
  },

  tableContainer: {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'white',
    flex: 1,
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




module.exports = CustomCellTableView;

AppRegistry.registerComponent('TableViewExampleCell1', () => TableViewExampleCell1);

