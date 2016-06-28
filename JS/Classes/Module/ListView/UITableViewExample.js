
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var TableView = require('../../../Vendor/react-native-tableview');
var Section = TableView.Section;
var Item = TableView.Item;
var responseData = require('../../../Resources/test.json');

class UITableViewExample extends React.Component {
     render(){
        return (
               <View style ={styles.container}>
                    <TableView style={styles.tableContainer}
                       allowsToggle={true}
                       allowsMultipleSelection={true}
                       tableViewStyle={TableView.Consts.Style.Grouped}
                       tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
                       onPress={(event) => console.log(event)}>
                         <Section label="Section 1" arrow={true}>
                              {responseData.map((rowData)=><Item key={rowData.title} detail={rowData.detail} >{rowData.title}</Item>)}
                         </Section>
                    </TableView>
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
     flex: 1,  

  },

  tableContainer: {
     marginLeft: 0,
     marginRight: 0,
     backgroundColor: 'white',
     flex: 1,
  },

});





module.exports = UITableViewExample;


