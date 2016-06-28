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
  PixelRatio,
  Dimensions,
  AlertIOS,
AsyncStorage,
    Navigator
} from 'react-native';

import * as TYPES from './types';

// fake user data
let testUser = {
	'name': 'juju',
	'age': '24',
	'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
};

// for skip user 
let skipUser = {
	'name': 'guest',
	'age': 20,
	'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460',
};

// login
export function logIn(opt){
	return (dispatch) => {
		dispatch({'type': TYPES.LOGGED_DOING});
		let inner_get = fetch('http://www.baidu.com')
			.then((res)=>{
				dispatch({'type': TYPES.LOGGED_IN, user: testUser});
			}).catch((e)=>{
				AlertIOS.alert(e.message);
				dispatch({'type': TYPES.LOGGED_ERROR, error: e});
			});
	}
}



// skip login
export function skipLogin(){
	return {
		'type': TYPES.LOGGED_IN,
		'user': skipUser,
	}
}


// logout
export function logOut(){
	return {
		'type': TYPES.LOGGED_OUT
	}
}