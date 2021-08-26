const initialState = {
  signin: false,
  token: null,
  id: null,
  error: '',
};

export const SIGNIN_USER = 'SIGNIN_USER';
export const SET_TOKEN_ID = 'SET_TOKEN_ID';
export const SET_SIGN_IN = 'SET_SIGN_IN';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';

export default function signinReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN_ID: {
      const {token, id} = action.payload;
      return {...state, id, token, error: ''};
    }
    case SET_SIGN_IN:
      return {...state, signin: ! state.signin};
    case SIGNIN_ERROR: {
      const { error } = action.payload;
      return {...state, error};
    }
    default:
      return state;
  }
}

export const setTokenId = payload => ({type: SET_TOKEN_ID, payload});
export const signinUser = payload => ({type: SIGNIN_USER, payload});
export const setSignIn = () => ({type: SET_SIGN_IN});
export const signInError = payload => ({type: SIGNIN_ERROR, payload});
