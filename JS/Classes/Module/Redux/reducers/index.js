
import { combineReducers } from 'redux';
import userReducer from './user';

export default combineReducers({
	userStore: userReducer,
});
