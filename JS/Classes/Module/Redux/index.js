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
    Navigator
} from 'react-native';


import { Provider } from 'react-redux';

import configureStore from './store/index';

let store = configureStore();

import Root from './root'; 


export default class App extends Component{
	constructor(){
		super();
		this.state = {
			isLoading: true,
			store: configureStore(()=>{this.setState({isLoading: false})})
		}
	}
	render(){
		if(this.state.isLoading){
			console.log('loading app');
			return null;
		}
		return (
			<Provider store={this.state.store}>
				<Root />
			</Provider>
		)
	}
}

