import {combineReducers} from 'redux';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  newsDetails: newsReducer,
})

export default rootReducer;