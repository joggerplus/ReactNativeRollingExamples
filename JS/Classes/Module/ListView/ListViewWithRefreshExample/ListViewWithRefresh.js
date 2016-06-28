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
  RefreshControl,
} from 'react-native';
import RequestUtils from './utils/RequestUtils'
import Animation from './custom-views/Animation'
import SnackBar from './custom-views/SnackBar.js'


class ListViewWithRefresh extends Component {
  constructor(props) {
    super(props);
    this.dateArray ;
    this.pageIndex = 1;
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      dataArray:null ,
      loadMore: false,
      isError: false,
      isRefreshing: false,
    };
  }

  componentDidMount() {
     this._refresh();
  }

  render() {
    let snackBar = this.state.isError
    ? (<SnackBar/>)
    : null

    this.state.isError = false
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listContainer}
          contentInset={{top: -64, left: 0, bottom: 0, right: 0}}
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          onEndReached={this._loadmore.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
          onEndReachedThreshold = {29}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._refresh.bind(this)}
              tintColor='#aaaaaa'
              title='Loading...'
              progressBackgroundColor='#aaaaaa'/>
          }
        />        
        {snackBar}
      </View>

    );
  }

  async _refresh () {
    if (this.state.isRefreshing) {
      return
    }
    this.setState({isRefreshing: true})
    try {
      this.dateArray = (await RequestUtils.getDateArray(1)).items
      this.pageIndex = 1
      this.setState({
        dataArray: this.dateArray,
        dataSource: this.state.dataSource.cloneWithRows(this.dateArray),
        isRefreshing: false
      })
    } catch (error) {
      this.setState({
        isError: true,
        isRefreshing: false
      })
    }
  }

  async _loadmore () {
    if (this.dateArray === undefined ) {return}

    if (this.state.loadMore) {
      return
    }

    this.setState({loadMore: true})

    try {
      this.pageIndex += 1
      let loadedContentGroup = (await RequestUtils.getDateArray(this.pageIndex)).items
      let newContent = [...this.state.dataArray, ...loadedContentGroup]
      this.setState({
        dataArray: newContent,
        dataSource: this.state.dataSource.cloneWithRows(newContent),
        loadMore: false
      })
    } catch (error) {

      console.log(error)
      this.setState({
        loadMore: false,
        isError: true
      })
    }


  }

  _renderFooter () {
    return (
      this.state.loadMore
      ? (<View style={[styles.indicatorWrapper]}>
          <Animation timingLength = {50} duration = {500} bodyColor={'black'}/>
        </View>)
      : null
      )
  }


  _renderItem (contentData, sectionID, rowID) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{Number(rowID) +1}</Text>
        <Image
          style={styles.thumbnail}
          source={{uri: contentData.avatar_url}}
        />
        <Text style={styles.detail}>{contentData.login}</Text>
      </View>

  );}



    
}

var styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 65,
    backgroundColor: 'yellow',
    flex: 1,
    borderColor:'red',
    borderWidth:2,
  },

  itemContainer: {
    marginLeft: 0,
    flexDirection: 'row',
    marginRight: 5,
    height: 70,
    backgroundColor: 'white',
    flex: 1,
    borderBottomColor:'red',
    borderBottomWidth:1,
  },
  title: {
    fontSize: 20,
    marginTop: 25,
    height:20,
    width:100,
    textAlign: 'center',
    fontSize: 15,
  },
  thumbnail: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    width: 50,
    height: 50,
  },

  detail: {
    marginTop: 25,
    height:20,
    textAlign: 'center',
    fontSize: 16,
  },
 indicatorWrapper: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer:{
    backgroundColor: '#F5FCFF',
    flex:1,
  }
});

module.exports = ListViewWithRefresh;

