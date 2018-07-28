import { createStore} from 'redux';
//import dataReducer from '../reducer/appreducer';
import combineReducers from '../reducer/appreducer';

//let store=createStore(dataReducer);
let store=createStore(combineReducers);
export default store;