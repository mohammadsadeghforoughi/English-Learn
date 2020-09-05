import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
 
export const createRootReducer = (history) =>
	combineReducers({
		 
		router: connectRouter(history),
	});
