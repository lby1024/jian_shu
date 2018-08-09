import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store/reducer.js';
import { reducer as homeReducer } from '../pages/home/store/reducer.js';
import { reducer as hotReducer } from '../pages/hot/store/reducer.js';

const reducer = combineReducers({
	header: headerReducer,
	hot: hotReducer,
	home: homeReducer
});

export default reducer;
