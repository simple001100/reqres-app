const initialState = {
  signin: false,
  token: null,
};

export const SET_TOGLE_REGISTRATION = 'SET_TOGLE_REGISTRATION';
export const SET_PERSONAL_DATA = 'SET_PERSONAL_DATA';
export const REGISTER_USER = 'REGISTER_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const SIGN_OUT = 'SIGN_OUT';

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      const {token} = action.payload;
      return {...state, signin: true, token};
    case SIGN_OUT:
      return {...state, signin: false};
    default:
      return state;
  }
}

export const setTogleRegistration = payload => ({
  type: SET_TOGLE_REGISTRATION,
  payload,
});
export const registerUser = payload => ({type: REGISTER_USER, payload});
export const setToken = payload => ({type: SET_TOKEN, payload});
export const signinUser = payload => ({type: SIGNIN_USER, payload});
export const signOut = () => ({type: SIGN_OUT});
