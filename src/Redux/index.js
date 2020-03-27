import { combineReducers } from "redux";
import data from './reducer';
const rootReducer = combineReducers({
  movie: data,
});

export default rootReducer;