import { createStore} from 'redux';
import dataReducer from '../reducer/appreducer';

let store=createStore(dataReducer);

export default store;