'use strict';
/**
 * @class 
 * @desc login
 * */
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
  PixelRatio,
  Dimensions,

    Navigator
} from 'react-native';

var cell_w = Dimensions.get('window').width;
var styles = StyleSheet.create({
    loginWrap: {
      backgroundColor: '#FCE9D4',
    },

    imgWrap: {
      flexDirection: 'row',
      flex: 1,
    },
    loginMain: {
      flex:1,
    },
    loginMainCon: {
      position: 'absolute', 
      top: 110,
      left: (cell_w-320)/2,
      backgroundColor: '#fff',
      height: 330,
      borderRadius: 20,
    },
    comCulture: {
      width:320,
      marginTop:50,
    },
    logoImg: {
      position: 'absolute', 
      top:0,
      left: cell_w/7,
      width:cell_w/7*5,
      resizeMode: 'contain',
    },
    formStyle: {
      backgroundColor:'#F4F3F3',
      marginTop: 30,
      marginLeft: 10,
      width: 300,
      height: 120,
      borderRadius: 8,
    },
    formInput:{
      flexDirection:'row',
      height: 60,
      padding: 20,
    },
    formInputSplit:{
      borderBottomWidth:1,
      borderBottomColor:'#dbdada',
    },
    loginInput: {
      height: 30,
      borderColor: '#000',
      paddingLeft: 10,
      flex: 1,
      fontSize: 16,
    },
    forget: {
      //alignItems: 'flex-end',
      flexDirection:'row',
      margin: 20
      
    },
    btn: {
      flexDirection:'row',
      //backgroundColor:'transparent',
    },

    btnWrap:{
      marginTop: 150,
      borderRadius: 5,
    },
  
    loginBtn1: {
        fontSize: 20,
        color: '#ffffff',
        backgroundColor: 'transparent',
        width: 150,
        height: 50,
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop: 15,
        marginRight: 20,
        flex: 1,
        textAlign: 'center',
      },
    loginBtn2: {
      fontSize: 20,
      color: '#C7D634',
      backgroundColor: '#fff',
      width: 150,
      height: 50,
      borderWidth: 1,
      borderColor: '#fff',
      paddingTop: 15,
      flex: 1,
      textAlign: 'center',
    },
      
})


module.exports = styles;
