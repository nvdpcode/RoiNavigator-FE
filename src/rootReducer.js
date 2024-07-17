import { combineReducers } from 'redux';
import {HomeReducer, InputsReducer} from './component/Home/reducers/homereducer';

const rootReducer = combineReducers({
  InputsReducer :InputsReducer,
  HomeReducer:HomeReducer
});

export default rootReducer;