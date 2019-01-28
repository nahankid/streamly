import { combineReducers } from "redux";
import googleAuthReducer from "./auth/GoogleAuth/reducer";

const reducers = combineReducers({
  googleAuth: googleAuthReducer
});

export default reducers;
