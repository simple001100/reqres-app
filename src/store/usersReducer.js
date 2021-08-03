const initialState = {
  users: [],
  totalPages: 0,
  loading: false,
};

export const SET_USERS = 'SET_USERS';
export const FETCH_USERS = 'FETCH_USERS';

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      const {data, total_pages} = action.payload;
      return {...state, users: state.users.push(data), totalPages: total_pages, loading: true};
  }
  return state;
}

export const setUsers = payload => ({type: SET_USERS, payload});
export const fetchUsers = payload => ({type: FETCH_USERS, payload});
