const initialState = {
  signin: false,
  token: null,
  error: null,
};

export const SIGNIN_USER = 'SIGNIN_USER';
export const SET_TOKEN_ID = 'SET_TOKEN_ID';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';

export default function signinReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN_ID:
      const {token, id} = action.payload;
      return {...state, signin: true, id, token};
    case SIGN_OUT:
      return {...state, signin: false};
    case SIGNIN_ERROR:
      const { error } = action.payload;
      return {...state, error};
    default:
      return state;
  }
}

export const setTokenId = payload => ({type: SET_TOKEN_ID, payload});
export const signinUser = payload => ({type: SIGNIN_USER, payload});
export const signOut = () => ({type: SIGN_OUT});
export const signInError = payload => ({type: SIGNIN_ERROR, payload});
