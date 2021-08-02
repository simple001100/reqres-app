const initialState = {
  signup: true,
  token: null,
  error: '',
};

export const SIGNUP_USER = 'SIGNUP_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      const {token} = action.payload;
      return {...state, signup: true, token};
    case SIGNUP_ERROR:
      const {error} = action.payload;
      return {...state, error};
    default:
      return state;
  }
}

export const setToken = payload => ({type: SET_TOKEN, payload});
export const signupUser = payload => ({type: SIGNUP_USER, payload});
export const signUpError = payload => ({type: SIGNUP_ERROR, payload});
