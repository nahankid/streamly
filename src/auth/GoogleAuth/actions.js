import { GOOGLE_AUTH_SIGNED_IN, GOOGLE_AUTH_SIGNED_OUT } from "./types";

export const googleAuthSignedIn = user => ({
  type: GOOGLE_AUTH_SIGNED_IN,
  payload: { user }
});

export const googleAuthSignedOut = () => ({
  type: GOOGLE_AUTH_SIGNED_OUT
});
