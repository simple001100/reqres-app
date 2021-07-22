
const initialState = {
    users: [],
};

export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS";

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload.data};
    };
    return state;
}

export const setUsers = (payload) => ({type: SET_USERS, payload});
export const fetchUsers = (payload) => ({type: FETCH_USERS, payload});

