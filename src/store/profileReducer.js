const initialState = {
  id: 4,
  firstName: 'unknown',
  lastName: 'unknown',
  email: 'not found',
  avatar: 'https://i1.sndcdn.com/avatars-000437232558-yuo0mv-t500x500.jpg',
};

export const GET_PROFILE = 'GET_PROFILE';
export const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE_DATA:
      const {id} = action.payload;
      return {...state, id};
    case SET_PROFILE_DATA:
      const {firstName, lastName, email, avatar} = action.payload;
      return {...state, firstName, lastName, email, avatar};
    default:
      return state;
  }
}

export const getProfile = (payload) => ({type: GET_PROFILE, payload});
export const setProfileData = (payload) => ({type: SET_PROFILE_DATA, payload})
