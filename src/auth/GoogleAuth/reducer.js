import { GOOGLE_AUTH_SIGNED_IN, GOOGLE_AUTH_SIGNED_OUT } from "./types";

const initialState = {
  isSignedIn: null,
  user: null
};

const googleAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_AUTH_SIGNED_IN:
      return { ...state, isSignedIn: true, user: action.payload.user };

    case GOOGLE_AUTH_SIGNED_OUT:
      return { ...state, isSignedIn: false, user: null };

    default:
      return state;
  }
};

export default googleAuthReducer;
