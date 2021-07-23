
const initialState = {
    data: [
        {togleRegistration: false},
        {togleSignin: false}
    ],
};

export const SET_TOGLE_REGISTRATION = "SET_TOGLE_REGISTRATION";
export const SET_TOGLE_SIGNIN = "SET_TOGLE_SIGNIN";
export const REGISTER_USER = "REGISTER_USER";
export const SIGNIN_USER = "SIGNIN_USER";

export default function clientReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOGLE_REGISTRATION:
            return {...state, state: action.payload.data[0].togleRegistration};
        case SET_TOGLE_SIGNIN:
            return {...state, state: action.payload.data[1].togleSignin};
    };
    return state;
}

export const setTogleRegistration = (payload) => ({type: SET_TOGLE_REGISTRATION, payload});
export const registerUser = (payload) => ({type: REGISTER_USER, payload});
export const setTogleSignIn = (payload) => ({type: SET_TOGLE_SIGNIN, payload});
export const signinUser = (payload) => ({type: SIGNIN_USER, payload});

