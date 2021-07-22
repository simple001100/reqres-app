
const initialState = {
    state: [false]
};

export const SET_USER = "SET_USER";
export const REGISTER_USER = "REGISTR_USER";

export default function clientReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {...state, state: action.payload.state};
    };
    return state;
}

export const setUser = (payload) => ({type: SET_USER, payload});
export const registerUser = (payload) => ({type: REGISTER_USER, payload});

