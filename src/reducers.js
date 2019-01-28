import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import googleAuthReducer from "./auth/GoogleAuth/reducer";

const reducers = combineReducers({
  form: formReducer,
  googleAuth: googleAuthReducer
});

export default reducers;
