const initialState = {
  users: [],
  totalPages: 1,
  loading: false,
};

export const SET_USERS = 'SET_USERS';
export const SET_LOADING = 'SET_LOADING';
export const FETCH_USERS = 'FETCH_USERS';
export const DELETE_USERS = 'DELETE_USERS';

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true};
    case SET_USERS:
      const {data, totalPages} = action.payload;
      return {
        ...state,
        users: state.users.concat(data),
        totalPages,
        loading: false,
      };
    case DELETE_USERS:
      const users = state.users;
      return {
        ...state,
        users: users.slice(users.length),
        totalPages: 1,
        loading: false,
      };
  }
  return state;
}

export const setUsers = payload => ({type: SET_USERS, payload});
export const setLoading = () => ({type: SET_LOADING});
export const fetchUsers = payload => ({type: FETCH_USERS, payload});
export const deleteUsers = () => ({type: DELETE_USERS});
