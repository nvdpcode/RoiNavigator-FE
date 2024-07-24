import { combineReducers } from 'redux';
import {HomeReducer, InputsReducer} from './component/Home/reducers/homeReducer';

const rootReducer = combineReducers({
  InputsReducer :InputsReducer,
  HomeReducer:HomeReducer
});

export default rootReducer;