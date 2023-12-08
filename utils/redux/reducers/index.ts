import { combineReducers } from "redux";
import authSlice from "../slices/authSlice";
import userSlice from "../slices/userSlice";

const rootReducer = combineReducers({
  authSlice: authSlice,
  userSlice: userSlice,
});

export default rootReducer;
