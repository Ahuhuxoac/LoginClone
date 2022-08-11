import { combineReducers } from "redux";
import { loginReducer } from "./reducer";
import { todoSlice } from '../thunks/todoSlice'

export default combineReducers({
  Login: loginReducer,
  todo: todoSlice.reducer
});
