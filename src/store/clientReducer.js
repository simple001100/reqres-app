
const initialState = {
    state: false
};

export const SET_USER = "SET_USER";
export const REGISTER_USER = "REGISTR_USER";

export default function clientReducer(state = initialState, action) {
    switch (action. type) {
        case REGISTER_USER:
            return {...state, state: payload.state};
    };
    return state;
}

export const setUser = payload => ({type: SET_USER, payload});
export const registerhUser = () => ({type: REGISTER_USER, payload});

