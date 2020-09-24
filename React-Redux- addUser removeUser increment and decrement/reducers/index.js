import { combineReducers } from 'redux'
import counterReducer from './counter';
import userReducer from './User';


const allReducers = combineReducers({
    // This is the first way to define 
    //user: userReducer,
    //counter: counterReducer
    //     OR second way to define
    userReducer,
    counterReducer
});
export default allReducers